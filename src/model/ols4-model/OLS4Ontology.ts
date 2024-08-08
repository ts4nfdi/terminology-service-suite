import {Ontology} from "../interfaces";
import {OLS4Thing} from "./OLS4Thing";

import Reified from "../Reified";

import { asArray } from "../../app/util";

export class OLS4Ontology extends OLS4Thing implements Ontology{
  getOntologyId(): string {
    return this.properties["ontologyId"];
  }
  getName(): string {
    const names = Reified.fromJson<string>(
      this.properties["label"] || this.properties["title"] || ""
    );
    return (names[0] && names[0].value) || this.getOntologyId();
  }
  getDescription(): string {
    const descriptions = Reified.fromJson<string>(
      this.properties["definition"] || this.properties["description"] || ""
    );
    return (descriptions[0] && descriptions[0].value) || "";
  }

  getCreators(): string[] {
    return asArray(this.properties["http://purl.org/dc/elements/1.1/creator"]);
  }

  getSourceFileTimestamp(): string {
    return this.properties["sourceFileTimestamp"];
  }
  getNumEntities(): number {
    return parseInt(this.properties["numberOfEntities"]);
  }
  getNumClasses(): number {
    return parseInt(this.properties["numberOfClasses"]);
  }
  getNumProperties(): number {
    return parseInt(this.properties["numberOfProperties"]);
  }
  getNumIndividuals(): number {
    return parseInt(this.properties["numberOfIndividuals"]);
  }
  getLogoURL(): string | undefined {
    return this.properties["depicted_by"];
  }
  getOntologyPurl(): string {
    return this.properties["ontology_purl"];
  }
  getHomepage(): string {
    return this.properties["homepage"];
  }
  getMailingList(): string {
    return this.properties["mailing_list"];
  }
  getTracker(): string {
    return this.properties["tracker"];
  }
  getVersionIri(): string {
    return this.properties["http://www.w3.org/2002/07/owl#versionIRI"];
  }
  getVersion(): string {
    return this.properties["http://www.w3.org/2002/07/owl#versionInfo"];
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
  getAnnotationPredicates(): string[] {
    const annotationPredicates = new Set();

    for (const predicate of Object.keys(this.properties)) {
      // properties without an IRI are things that were added by rdf2json so should not
      // be included as annotations
      if (predicate.indexOf("://") === -1) continue;

      if (predicate === "http://purl.obolibrary.org/obo/IAO_0000700") {
        // "has preferred root term"
        continue;
      }

      // anything in the rdf, rdfs, owl namespaces aren't considered annotations
      if (
        !(
          predicate.startsWith("http://www.w3.org/2000/01/rdf-schema#") ||
          predicate.startsWith("http://www.w3.org/1999/02/22-rdf-syntax-ns#") ||
          predicate.startsWith("http://www.w3.org/2002/07/owl#")
        )
      ) {
        annotationPredicates.add(predicate);
      }
    }

    return Array.from(annotationPredicates) as string[];
  }
  getPreferredRoots(): string[] {
    return asArray(this.properties["hasPreferredRoot"]);
  }
  getPreferredPrefix(): string {
    return this.properties["preferredPrefix"];
  }

  getLanguages(): string[] {
    return asArray(this.properties["language"]);
  }
  getImportsFrom(): string[] {
    return asArray(this.properties["importsFrom"]);
  }
  getExportsTo(): string[] {
    return asArray(this.properties["exportsTo"]);
  }

  // TODO: not available?
  getAllowDownload(): string {
    return this.properties["allowDownload"];
  }
}
