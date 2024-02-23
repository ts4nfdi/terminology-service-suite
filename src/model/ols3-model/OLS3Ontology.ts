import {Ontology} from "../interfaces";
import {OLS3Thing} from "./OLS3Thing";

import Reified from "../Reified";

import {asArray, deCamelCase} from "../../app/util";

export class OLS3Ontology extends OLS3Thing implements Ontology{

  getType(): "ontology" | "class" | "property" | "individual" {
    return "ontology";
  }

  getTypePlural(): "ontologies" | "classes" | "properties" | "individuals" {
    return "ontologies";
  }

  getOntologyId(): string {
    return this.properties["ontologyId"];
  }
  getName(): string {
    let names = Reified.fromJson<string>(
        this.properties["config"]["title"] || ""
    );
    return (names[0] && names[0].value) || this.getOntologyId();
  }
  getDescription(): string {
    let descriptions = Reified.fromJson<string>(
      this.properties["description"] || ""
    );
    return (descriptions[0] && descriptions[0].value) || "";
  }

  getCreators(): string[] {
    return asArray(this.properties["config"]["annotations"]["creator"]);
  }

  getSourceFileTimestamp(): string {
    return this.properties["updated"];
  }
  getNumEntities(): number {
    return parseInt(this.properties["numberOfEntities"]);
  }
  getNumClasses(): number {
    return parseInt(this.properties["numberOfTerms"]);
  }
  getNumProperties(): number {
    return parseInt(this.properties["numberOfProperties"]);
  }
  getNumIndividuals(): number {
    return parseInt(this.properties["numberOfIndividuals"]);
  }
  getLogoURL(): string | undefined {
    return this.properties["config"]["logo"] || undefined;
  }

  // used as IRI
  getOntologyPurl(): string {
    return this.properties["config"]["id"];
  }

  getHomepage(): string {
    return this.properties["config"]["homepage"];
  }
  getMailingList(): string {
    return this.properties["config"]["mailingList"];
  }
  getTracker(): string {
    return this.properties["config"]["tracker"];
  }
  getVersionIri(): string {
    return this.properties["config"]["versionIri"];
  }
  getVersion(): string {
    return this.properties["config"]["version"];
  }
  getVersionFromIri(): string {
    const versionIri = this.getVersionIri();
    if (!versionIri) return "";
    const versionFromDate = versionIri.match(/\d{4}-\d{2}-\d{2}/);

    if (versionFromDate && versionFromDate.length > 0) {
      return versionFromDate[0];
    } else {
      const versionFromNumber = versionIri.match(/\/v[d.].*\//);
      return versionFromNumber
        ? versionFromNumber[0].replaceAll("/", "").replace("v", "")
        : "";
    }
  }
  getLoaded(): string {
    return this.properties["loaded"];
  }

  /** Can be just found under `properties["config"]["annotations"]`.
   *  Not present in ols4/api,
   *  but in semanticlookup.zbmed.de/api.
   */
  getAnnotationPredicates(): string[] {
    if(this.properties["config"] && this.properties["config"]["annotations"]) {
      /* ols4 excludes "has preferred root term",
       properties without an IRI and anything in rdf, rdfs and owl namespaces,
       but this is not possible here as the labels are keys here, not the IRI's */
      return asArray<string>(Object.keys(this.properties["config"]["annotations"]));
    }
    else {
      // "annotations" key is not present in ols4/api
      return [];
    }
  }

  getAnnotationTitleById(id: string): string {
    return deCamelCase(id);
  }

  getAnnotationById(id: string):Reified<any>[] {
    return Reified.fromJson(asArray(this.properties["config"]["annotations"][id])
        .filter((elem) => {
          return typeof elem === "string" && elem !== ""
        })
    )
  }

  getPreferredRoots(): string[] {
    return asArray(this.properties["hasPreferredRoot"]);
  }
  getLanguages(): string[] {
    // not available in semlookp API, but in ebi API
    return asArray(this.properties["lang"]);
  }

  // TODO: not available?
  getImportsFrom(): string[] {
    return [];
  }

  // TODO: not available?
  getExportsTo(): string[] {
    return asArray(this.properties["exportsTo"]);
  }
  getAllowDownload(): string {
    return this.properties["config"]["allowDownload"];
  }
}
