import { Thing } from "../interfaces";

import LinkedEntities from "../LinkedEntities";
import Reified from "../Reified";
import { ThingTypeName } from "../ModelTypeCheck";
import { pluralizeType } from "../../app/util";

export abstract class OLS3Thing implements Thing {
  properties: any;

  constructor(properties: any) {
    this.properties = properties;
  }

  getLabel(): string {
    return this.properties["label"];
  }

  // TODO: Is curie / obo_id meant? "id" only exists in standard? (http://www.ebi.ac.uk/ols4/api/ontologies/ado/properties?iri=http://purl.obolibrary.org/obo/RO_0002175)
  getId(): string {
    return this.properties["id"];
  }

  getIri(): string {
    return this.properties["iri"];
  }

  // standard responses don't have "type" key -> implement statically in subtypes
  abstract getType(): ThingTypeName;

  getTypePlural():
    | "ontologies"
    | "classes"
    | "terms"
    | "properties"
    | "individuals" {
    return pluralizeType(this.getType());
  }

  // not available in standard responses
  getRdfTypes(): string[] {
    return [];
  }

  getName(): string {
    return this.getNames()[0];
  }

  // has additional key "shorthand"? (http://www.ebi.ac.uk/ols4/api/ontologies/ado/properties?iri=http://purl.obolibrary.org/obo/RO_0002175)
  getNames(): string[] {
    const labels = Reified.fromJson<any>(this.properties["label"]);
    if (labels && labels.length > 0) {
      return labels.map((label) => label.value);
    }
    return [this.getIri()];
  }

  getDescription(): string {
    const definition = Reified.fromJson<any>(this.properties["description"]);
    if (definition && definition.length > 0) {
      return definition.map((def) => def.value || "").join(" ");
    }
    return "";
  }

  getOntologyId(): string {
    return this.properties["ontology_name"];
  }

  // TODO: not applicable / necessary in standard as there are no linked entities
  getLabelForIri(id: string) {
    const linkedEntities = this.properties["linkedEntities"];
    if (linkedEntities) {
      const label: Reified<string>[] = Reified.fromJson<string>(
        linkedEntities[id]?.label,
      );
      return label[0]?.value || id;
    } else {
      return id;
    }
  }

  abstract getAnnotationPredicates(): string[];
  abstract getAnnotationTitleById(id: string): string;
  abstract getAnnotationById(id: string): Reified<any>[];

  // TODO: not applicable / necessary in standard
  getLinkedEntities(): LinkedEntities {
    return new LinkedEntities(this.properties["linkedEntities"] || {});
  }

  getDepictionUrl(): string[] {
    if (
      this.properties["annotation"] &&
      this.properties["annotation"]["depiction"]
    ) {
      return this.properties["annotation"]["depiction"];
    }
    return [];
  }
}
