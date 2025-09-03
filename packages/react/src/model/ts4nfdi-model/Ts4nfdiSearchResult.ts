import { SelectResult } from "../interfaces/SelectResult";
import { ThingTypeName } from "../ModelTypeCheck";

export class Ts4nfdiSearchResult implements SelectResult {
  properties: any;

  constructor(properties: any) {
    this.properties = properties;
  }

  getDescription(): string {
    const description = this.properties["description"];

    if (Array.isArray(description)) {
      return description.join(" ");
    } else if (typeof description === "string") {
      return description;
    } else {
      return "";
    }
  }

  getIri(): string {
    return this.properties["iri"];
  }

  getLabel(): string | undefined {
    return this.properties["label"];
  }

  getOntologyId(): string {
    return this.properties["ontology"];
  }

  getType(): ThingTypeName {
    return this.properties["type"];
  }

  getTypePlural():
    | "ontologies"
    | "classes"
    | "properties"
    | "individuals"
    | "terms" {
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
      default:
        throw new Error("unknown type");
    }
  }

  getShortForm(): string {
    return this.properties["short_form"];
  }

  getApiSourceName(): string {
    return this.properties["source_name"];
  }

  getApiSourceEndpoint(): string {
    return this.properties["source"];
  }
}
