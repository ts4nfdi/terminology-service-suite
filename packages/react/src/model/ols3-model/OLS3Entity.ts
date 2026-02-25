import { Entity } from "../interfaces";
import { OLS3Thing } from "./OLS3Thing";

import Reified from "../Reified";

import { asArray, deUnderscore } from "../../app/util";
import { EntityTypeName } from "../ModelTypeCheck";

export abstract class OLS3Entity extends OLS3Thing implements Entity {
  abstract getParents(): Reified<any>[];
  abstract getSuperEntities(): Reified<any>[];
  abstract getEquivalents(): Reified<any>[];

  isCanonical(): boolean {
    return this.properties["is_defining_ontology"] === true;
  }

  // TODO: does not seem to occur in standard (http://www.ebi.ac.uk/ols4/api/v2/entities?iri=http://purl.obolibrary.org/obo/FOODON_00004474)
  //       v2 has deprecated information, standard has not
  isDeprecated(): boolean {
    return (
      this.properties["http://www.w3.org/2002/07/owl#deprecated"] === "true"
    );
  }

  getDeprecationVersion(): string {
    // only supports EFO for now
    return this.properties["http://www.ebi.ac.uk/efo/obsoleted_in_version"];
  }

  getDeprecationReason(): Reified<any>[] {
    return Reified.fromJson<any>(
      this.properties["http://purl.obolibrary.org/obo/IAO_0000231"],
    ).concat(
      Reified.fromJson<any>(
        this.properties["http://www.ebi.ac.uk/efo/reason_for_obsolescence"],
      ),
    );
  }

  getDeprecationReplacement(): string {
    return this.properties["http://purl.obolibrary.org/obo/IAO_0100001"];
  }

  // TODO: not existent in standard. Can be extracted from "links"->"graph"
  //       (http://www.ebi.ac.uk/ols4/api/terms?iri=http://purl.obolibrary.org/obo/AGRO_00000002)
  getRelatedFrom(): Reified<any>[] {
    return Reified.fromJson<any>(this.properties["relatedFrom"]);
  }

  getDescriptionAsArray(): Reified<any>[] {
    return Reified.fromJson<any>(this.properties["description"]);
  }

  // TODO: not existent in standard. Can be extracted from "links"->"children"
  hasDirectChildren(): boolean {
    return this.properties["hasDirectChildren"] === "true";
  }

  // // TODO: not existent in standard. Can be extracted from "links"->"hierarchicalChildren"
  hasHierarchicalChildren(): boolean {
    return this.properties["hasHierarchicalChildren"] === "true";
  }

  hasChildren(): boolean {
    return this.properties["has_children"];
  }

  // TODO: could not find examples of ancestors in new api so far
  getAncestorIris(): string[] {
    return asArray(this.properties["ancestor"]);
  }

  // TODO: can be inferred via "links"->"hierarchicalAncestors"
  getHierarchicalAncestorIris(): string[] {
    return asArray(this.properties["hierarchicalAncestor"]);
  }

  getSynonyms() {
    return Reified.fromJson<any>(this.properties["synonyms"]);
  }

  // TODO: not existent in standard. Can be extracted via searching for entity without specific ontology -> gives all occurrences
  getAppearsIn(): string[] {
    return (this.properties["appearsIn"] || []) as string[];
  }

  getCrossReferences(): any[] {
    return this.properties["annotation"]["has_dbxref"] || [];
  }

  // TODO: not existent in standard. Standard seems to have problems with is_defining_ontology as well
  //       (http://www.ebi.ac.uk/ols4/api/v2/ontologies/ro/properties?iri=http://purl.obolibrary.org/obo/RO_0002175)
  getDefinedBy(): string[] {
    return (this.properties["definedBy"] || []) as string[];
  }

  getIsDefiningOntology(): boolean {
    return (this.properties["is_defining_ontology"] || undefined) as boolean;
  }

  getShortForm(): string {
    return this.properties["obo_id"] || this.properties["short_form"];
  }


  isPredicateFromInformalVocabulary(predicate: string): boolean {
    return (
      predicate.startsWith("http://www.w3.org/2004/02/skos/core#") ||
      predicate.startsWith("http://purl.org/dc/terms/") ||
      predicate.startsWith("http://purl.org/dc/elements/1.1/") ||
      predicate.startsWith("http://schema.org/")
    );
  }

  /** Can be just found under `properties["annotation"]`.
   *  Not present in ols4/api,
   *  but in semanticlookup.zbmed.de/api.
   */
  getAnnotationPredicates(): string[] {
    /* ols4 excludes "has preferred root term",
       properties without an IRI and anything in rdf, rdfs and owl namespaces,
       but this is not possible here as the labels are keys here, not the IRI's */
    return asArray<string>(Object.keys(this.properties["annotation"]));
  }

  getAnnotationTitleById(id: string): string {
    return deUnderscore(id);
  }

  getAnnotationById(id: string): Reified<any>[] {
    return Reified.fromJson(asArray(this.properties["annotation"][id]));
  }

  // TODO: Can be inferred via "links"->"hierarchicalDescendants"
  getNumHierarchicalDescendants(): number {
    return this.properties["numHierarchicalDescendants"]
      ? parseInt(this.properties["numHierarchicalDescendants"])
      : 0;
  }

  // TODO: Can be inferred via "links"->"descendants"
  getNumDescendants(): number {
    return this.properties["numDescendants"]
      ? parseInt(this.properties["numDescendants"])
      : 0;
  }

  // TODO: Can be inferred via "links"->"hierarchicalParents"
  getHierarchicalParentReificationAxioms(parentIri: string): any {
    const hierarchicalParents = Reified.fromJson<any>(
      this.properties["hierarchicalParent"],
    );

    for (const p of hierarchicalParents) {
      if (p.value === parentIri) {
        return p.getMetadata();
      }
    }
  }

  abstract getType(): EntityTypeName;
}
