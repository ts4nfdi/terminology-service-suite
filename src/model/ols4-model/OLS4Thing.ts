import {Thing} from "../interfaces";

import LinkedEntities from "../LinkedEntities";
import Reified from "../Reified";

import { asArray } from "../../app/util";
import { isThingTypeName, ThingTypeName } from "../ModelTypeCheck";

export abstract class OLS4Thing implements Thing {
  properties: any;

  constructor(properties: any) {
    this.properties = properties;
  }

  getLabel(): string | undefined {
    return this.properties["label"];
  }

  // TODO: Is curie / obo_id meant?
  getId(): string {
    return this.properties["id"];
  }

  getIri(): string {
    return this.properties["iri"];
  }

  getType(): ThingTypeName {
    const types = this.properties["type"] as string[];

    for (const type of types) {
      if (
        isThingTypeName(type)
      ) {
        return type as any;
      }
    }

    throw new Error("unknown type");
  }

  getTypePlural(): "ontologies" | "classes" | "properties" | "individuals" | "terms" {
    const type = this.getType();

    switch (type) {
      case "ontology":
        return "ontologies";
      case "class":
        return "classes";
      case "property":
        return "properties";
      case "individual":
        return "individuals";
      case "annotationProperty":
        return "properties";
      case "dataProperty":
        return "properties";
      case "objectProperty":
        return "properties";
      default:
        throw new Error("unknown type");
    }
  }

  getRdfTypes(): string[] {
    return asArray(this.properties[
      "http://www.w3.org/1999/02/22-rdf-syntax-ns#type"
    ])
  }

  getName(): string {
	return this.getNames()[0];
  }

  getNames(): string[] {
    const labels = Reified.fromJson<any>(
      this.properties["label"]
    );
    if (labels && labels.length > 0) {
      return labels.map(label => label.value)
    }
    return [this.getIri()];
  }

  getDescription(): string {
    const definition = Reified.fromJson<any>(this.properties["definition"]);
    if (definition && definition.length > 0) {
      return definition.map((def) => def.value || "").join(" ");
    }
    return "";
  }

  getOntologyId(): string {
    return this.properties["ontologyId"];
  }

  getLabelForIri(id: string) {
    const linkedEntities = this.properties["linkedEntities"];
    if (linkedEntities) {
      const label:Reified<string>[] = Reified.fromJson<string>( linkedEntities[id]?.label );
      return label[0]?.value || id
    } else {
      return id;
    }
  }

  abstract getAnnotationPredicates(): string[];

  getAnnotationById(id: string):Reified<any>[] {
    return Reified.fromJson(asArray(this.properties[id]))
  }

  getAnnotationTitleById(id: string): string {
    return this.getLabelForIri(id);
  }

  getLinkedEntities(): LinkedEntities {
    return new LinkedEntities(this.properties["linkedEntities"] || {});
  }

  getDepictionUrl(): string {
    if (this.properties["http://xmlns.com/foaf/0.1/depiction"]) {
      return this.properties["http://xmlns.com/foaf/0.1/depiction"];
    }
    return "";
  }
}
