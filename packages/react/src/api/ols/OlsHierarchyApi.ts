import {
  classTypeNames,
  EntityTypeName,
  isClassTypeName,
  isIndividualTypeName,
} from "../../model/ModelTypeCheck";
import { Entity } from "../../model/interfaces";
import {
  asArray,
  getEntityInOntologySuffix,
  getUseLegacy,
  pluralizeType,
} from "../../app/util";
import {
  buildOtherParams,
  check_for_errors,
  isTop,
} from "../../utils/olsApiUtils";
import { createModelObject } from "../../model/ols-model/ModelObjectCreator";
import { JSTreeNode } from "../../utils/olsApiTypes";
import {
  BuildHierarchyProps,
  HierarchyBuilder,
  HierarchyIriProp,
  LoadHierarchyChildrenProps,
} from "../../model/interfaces/HierarchyBuilder";
import {
  Hierarchy,
  ParentChildRelation,
  TreeNode,
} from "../../model/interfaces/Hierarchy";
import { EntityData } from "../../app";
import Reified from "../../model/Reified";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { OlsEntityApi } from "./OlsEntityApi";
import { OlsOntologyApi } from "./OlsOntologyApi";

export const HIERARCHY_WIDGET_DEFAULT_VALUES = {
  INCLUDE_OBSOLETE_ENTITIES: false,
  PREFERRED_ROOTS: false,
  KEEP_EXPANSION_STATES: false,
  SHOW_SIBLINGS_ON_INIT: false,
  USE_LEGACY: false,
  WRAP: false,
} as const;

export class OlsHierarchyApi implements HierarchyBuilder {
  protected axiosInstance: AxiosInstance;
  private entityService: OlsEntityApi;
  private ontologyService: OlsOntologyApi;

  constructor(api: string | AxiosInstance) {
    this.axiosInstance =
      typeof api === "string"
        ? axios.create({
            baseURL: api,
            headers: { Accept: "application/json" },
          })
        : api;
    this.entityService = new OlsEntityApi(this.axiosInstance);
    this.ontologyService = new OlsOntologyApi(this.axiosInstance);
  }

  protected async makeCall(
    url: string,
    config: AxiosRequestConfig<any> | undefined,
    useLegacy: boolean,
  ) {
    const apiVersionPrefix = getUseLegacy(useLegacy) ? "" : "v2/";
    const response = (
      await this.axiosInstance.get(apiVersionPrefix + url, config)
    ).data;
    return check_for_errors(response);
  }

  public async getAncestors(
    iri: string,
    entityType: EntityTypeName,
    ontologyId: string,
    useLegacy = false,
    includeObsoleteEntities = false,
    parameter: string | undefined,
  ): Promise<Entity[]> {
    let ancestors: any;
    if (isClassTypeName(entityType)) {
      ancestors = await this.makeCall(
        `${getEntityInOntologySuffix(
          ontologyId,
          entityType,
          iri,
          useLegacy,
        )}/hierarchicalAncestors`,
        {
          params: {
            size: "1000",
            includeObsoleteEntities: includeObsoleteEntities,
            ...buildOtherParams(parameter),
          },
        },
        useLegacy,
      );
    } else {
      ancestors = await this.makeCall(
        `${getEntityInOntologySuffix(
          ontologyId,
          entityType,
          iri,
          useLegacy,
        )}/ancestors`,
        {
          params: {
            size: "1000",
            includeObsoleteEntities: includeObsoleteEntities,
            ...buildOtherParams(parameter),
          },
        },
        useLegacy,
      );
    }
    if (useLegacy) {
      const listOfAncestorObj: Array<Entity> = [];
      let extractKey = "";
      switch (entityType) {
        case "class":
          extractKey = "terms";
          break;
        case "term":
          extractKey = "terms";
          break;
        case "property":
          extractKey = "properties";
          break;
        case "individual":
          extractKey = "individuals";
          break;
        default:
          throw Error("Entity type could not be correctly inferred.");
      }
      ancestors["_embedded"][extractKey].map((obj: any) => {
        listOfAncestorObj.push(
          createModelObject({ _embedded: { [extractKey]: [obj] } }) as Entity,
        );
      });
      return listOfAncestorObj;
    }
    return ancestors["elements"].map(
      (obj: any) => createModelObject({ elements: [obj] }) as Entity,
    );
  }

  public async getJSTree(
    iri: string,
    entityType: EntityTypeName,
    ontologyId: string,
    parameter: string | undefined,
  ): Promise<JSTreeNode[]> {
    return await this.makeCall(
      `${getEntityInOntologySuffix(ontologyId, entityType, iri, true)}/jstree`,
      {
        params: {
          size: "1000",
          viewMode: "All",
          ...buildOtherParams(parameter),
        },
      },
      true,
    );
  }

  // TODO: Do we want the same behavior as EMBL EBI (e.g. not getting instances for classes if entityType != "individual")?
  public async getChildren(
    iri: string,
    entityType: EntityTypeName,
    ontologyId: string,
    includeObsoleteEntities = false,
    useLegacy = false,
    parameter: string,
  ): Promise<Entity[]> {
    let children: any;
    if (isClassTypeName(entityType)) {
      children = await this.makeCall(
        `${getEntityInOntologySuffix(
          ontologyId,
          classTypeNames[0],
          iri,
          useLegacy,
        )}/hierarchicalChildren`,
        {
          params: {
            size: "1000",
            includeObsoleteEntities: includeObsoleteEntities,
            ...buildOtherParams(parameter),
          },
        },
        useLegacy,
      );
    } else if (isIndividualTypeName(entityType)) {
      // entityType does NOT indicate which type the entity of the provided iri has, but which type of hierarchy is desired
      // -> "class" has to be provided for individual hierarchy as well, as individuals are always children of classes
      if (useLegacy) {
        // TODO: Does descendants always work for this (or are there classes with both individuals and classes as descendants)?
        children = await this.makeCall(
          `${getEntityInOntologySuffix(
            ontologyId,
            classTypeNames[0],
            iri,
            useLegacy,
          )}/descendants`,
          {
            params: {
              size: "1000",
              ...buildOtherParams(parameter),
            },
          },
          useLegacy,
        );
      } else {
        children = await this.makeCall(
          `${getEntityInOntologySuffix(
            ontologyId,
            classTypeNames[0],
            iri,
            useLegacy,
          )}/instances`,
          {
            params: {
              size: "1000",
              includeObsoleteEntities: includeObsoleteEntities,
              ...buildOtherParams(parameter),
            },
          },
          useLegacy,
        );
      }
    } else {
      children = await this.makeCall(
        `${getEntityInOntologySuffix(
          ontologyId,
          entityType,
          iri,
          useLegacy,
        )}/children`,
        {
          params: {
            size: "1000",
            includeObsoleteEntities: includeObsoleteEntities,
            ...buildOtherParams(parameter),
          },
        },
        useLegacy,
      );
    }

    if (useLegacy) {
      return children["_embedded"][
        isIndividualTypeName(entityType)
          ? pluralizeType(classTypeNames[0], useLegacy)
          : pluralizeType(entityType, useLegacy)
      ].map(
        (obj: any) =>
          createModelObject({
            ["_embedded"]: {
              [isIndividualTypeName(entityType)
                ? pluralizeType(classTypeNames[0], useLegacy)
                : pluralizeType(entityType)]: [obj],
            },
          }) as Entity,
      );
    } else {
      return children["elements"].map(
        (obj: any) => createModelObject({ elements: [obj] }) as Entity,
      );
    }
  }

  public async getRootEntities(
    entityType: EntityTypeName,
    ontologyId: string,
    preferredRoots = false,
    includeObsoleteEntities = false,
    useLegacy = false,
    parameter = "",
  ): Promise<Entity[]> {
    if (useLegacy) {
      if (isIndividualTypeName(entityType)) {
        // TODO: Implement behaviour for individuals
        return [];
      } else {
        // TODO: /preferredRoots route should exist in legacy api, but does not work
        const roots = await this.makeCall(
          `${getEntityInOntologySuffix(
            ontologyId,
            entityType,
            undefined,
            useLegacy,
          )}/roots`,
          {
            params: {
              size: "1000",
              includeObsoleteEntities: includeObsoleteEntities,
              ...buildOtherParams(parameter),
            },
          },
          useLegacy,
        );

        return roots["_embedded"][pluralizeType(entityType, useLegacy)].map(
          (obj: any) =>
            createModelObject({
              ["_embedded"]: { [pluralizeType(entityType, useLegacy)]: [obj] },
            }) as Entity,
        );
      }
    } else {
      if (isIndividualTypeName(entityType)) {
        // TODO: Implement behaviour for individuals
        return [];
      } else {
        const roots = await this.makeCall(
          `${getEntityInOntologySuffix(
            ontologyId,
            entityType,
            undefined,
            useLegacy,
          )}`,
          {
            params: {
              size: "1000",
              includeObsoleteEntities: includeObsoleteEntities,
              hasDirectParents: preferredRoots ? undefined : "false",
              isPreferredRoot: preferredRoots ? "true" : undefined,
              ...buildOtherParams(parameter),
            },
          },
          useLegacy,
        );

        return roots["elements"].map(
          (obj: any) => createModelObject({ elements: [obj] }) as Entity,
        );
      }
    }
  }

  public async buildHierarchyWithIri(
    props: BuildHierarchyProps & HierarchyIriProp,
  ): Promise<Hierarchy> {
    const {
      iri,
      ontologyId,
      entityType,
      preferredRoots = false,
      includeObsoleteEntities = false,
      keepExpansionStates = true,
      showSiblingsOnInit = false,
      useLegacy = false,
      parameter,
    } = props;

    if (iri) {
      return await this.entityService
        .getEntityObject(iri, entityType, ontologyId, parameter, useLegacy)
        .then((entity) =>
          this.buildHierarchyWithEntity({
            entityType: entityType || (entity.getType() as EntityTypeName),
            ontologyId: ontologyId || entity.getOntologyId(),
            includeObsoleteEntities: includeObsoleteEntities,
            preferredRoots: preferredRoots,
            mainEntity: entity,
            keepExpansionStates: keepExpansionStates,
            showSiblingsOnInit: showSiblingsOnInit,
            useLegacy: useLegacy,
            parameter: parameter,
          }),
        );
    } else {
      if (entityType == undefined || ontologyId == undefined)
        throw Error(
          "Either iri or ontologyId and entityType have to be provided.",
        );
      return await this.buildRootHierarchy({
        entityType: entityType,
        ontologyId: ontologyId,
        includeObsoleteEntities: includeObsoleteEntities,
        preferredRoots: preferredRoots,
        keepExpansionStates: keepExpansionStates,
        showSiblingsOnInit: showSiblingsOnInit,
        useLegacy: useLegacy,
        parameter: parameter,
      });
    }
  }

  public jsTreeNodeToEntityData(jsTreeNode: JSTreeNode): EntityData {
    return {
      iri: jsTreeNode.iri,
      label: jsTreeNode.text,
      hasChildren: jsTreeNode.children || jsTreeNode.state.opened,
      parents: [],
    };
  }

  public entityToEntityData(entity: Entity): EntityData {
    return {
      iri: entity.getIri(),
      label: asArray(entity.getLabel())[0],
      definedBy: entity.getDefinedBy(),
      hasChildren: entity.hasChildren(),
      numDescendants:
        entity.getNumHierarchicalDescendants() || entity.getNumDescendants(),
      parents: entity.getParents(),
    };
  }

  public async buildRootHierarchy(
    props: {
      ontologyId: string;
      entityType: EntityTypeName;
    } & BuildHierarchyProps,
  ): Promise<Hierarchy> {
    const {
      ontologyId,
      entityType,
      preferredRoots,
      includeObsoleteEntities,
      useLegacy = HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
      parameter,
    } = props;

    /* QUERY root entities */
    const rootEntitiesData = (
      await this.getRootEntities(
        entityType,
        ontologyId,
        preferredRoots,
        includeObsoleteEntities,
        useLegacy,
        parameter,
      )
    )
      .map((entity) => this.entityToEntityData(entity))
      .filter((root) => !isTop(root.iri));
    /* --- */

    /* INITIALIZE entitiesData, parentChildRelations */
    const parentChildRelations: Map<string, ParentChildRelation[]> = new Map<
      string,
      ParentChildRelation[]
    >();
    const entitiesData: Map<string, EntityData> = new Map<string, EntityData>();
    for (const entityData of rootEntitiesData) {
      parentChildRelations.set(entityData.iri, []); // initialize with empty array
      entitiesData.set(entityData.iri, entityData);
    }
    /* --- */

    return new Hierarchy({
      parentChildRelations: parentChildRelations,
      entitiesData: entitiesData,
      allChildrenPresent: new Set(),
      roots: rootEntitiesData
        .map((root) => new TreeNode(root))
        .sort((a, b) =>
          (a.entityData.label || a.entityData.iri).localeCompare(
            b.entityData.label || b.entityData.iri,
          ),
        ),
      api: new OlsHierarchyApi(this.axiosInstance.getUri()),
      ontologyId: ontologyId,
      includeObsoleteEntities: includeObsoleteEntities,
      entityType: entityType,
      keepExpansionStates: props.keepExpansionStates,
      useLegacy: useLegacy,
      parameter: parameter,
    });
  }

  public async buildHierarchyWithEntity(
    props: {
      mainEntity: Entity;
      ontologyId: string;
      entityType: EntityTypeName;
    } & BuildHierarchyProps,
  ): Promise<Hierarchy> {
    const {
      mainEntity,
      ontologyId,
      entityType,
      preferredRoots,
      includeObsoleteEntities = HIERARCHY_WIDGET_DEFAULT_VALUES.INCLUDE_OBSOLETE_ENTITIES,
      showSiblingsOnInit,
      useLegacy = HIERARCHY_WIDGET_DEFAULT_VALUES.USE_LEGACY,
      parameter,
    } = props;

    /* LOAD ancestors */
    let entities: EntityData[] = [];

    if (useLegacy) {
      // TODO: JSTree sometimes returns smaller trees than would be possible via querying hierarchical ancestors and all children of those (e.g. http://purl.obolibrary.org/obo/UBERON_2001747 -> strange and not really useful hierarchy because many entities are both sibling and children of other entities (is it wrong to take hierarchicalParent instead of directParent in entityToEntityDataToHierarchy? EMBL-EBI does it like that as well))
      //       Question: Should we prefer complete hierarchies (query /hierarchicalAncestors + /children for each) or slim queries (query /jstree)?
      const jsTree = await this.getJSTree(
        mainEntity.getIri(),
        entityType,
        ontologyId,
        parameter,
      );
      const idToIri: Map<string, string> = new Map<string, string>();
      const parents: Map<string, Set<string>> = new Map<string, Set<string>>();

      for (const jsTreeNode of jsTree) {
        idToIri.set(jsTreeNode.id, jsTreeNode.iri);
        parents.set(jsTreeNode.iri, new Set<string>());
      }

      for (const jsTreeNode of jsTree) {
        const parArr = parents.get(jsTreeNode.iri);
        const parIri = idToIri.get(jsTreeNode.parent);
        if (parArr != undefined && parIri != undefined) {
          parArr.add(parIri);
        }
      }

      entities = [];
      const inArr = new Set<string>();

      for (const jsTreeNode of jsTree) {
        if (!inArr.has(jsTreeNode.iri)) {
          inArr.add(jsTreeNode.iri);

          entities.push(this.jsTreeNodeToEntityData(jsTreeNode));
          const par = parents.get(jsTreeNode.iri);
          if (par != undefined)
            entities[entities.length - 1].parents =
              Reified.fromJson(Array.from(par.values())) || [];
        }
      }
    } else {
      const ancestors = await this.getAncestors(
        mainEntity.getIri(),
        entityType,
        ontologyId || mainEntity.getOntologyId(),
        useLegacy,
        includeObsoleteEntities,
        parameter,
      );
      entities = [
        this.entityToEntityData(mainEntity),
        ...ancestors.map((entity) => this.entityToEntityData(entity)),
      ];
    }

    // filter top entities
    entities = entities.filter((e) => !isTop(e.iri));
    /* --- */

    /* BUILD parentChildRelations */
    const parentChildRelations: Map<string, ParentChildRelation[]> = new Map<
      string,
      ParentChildRelation[]
    >();
    const allChildrenPresent: Set<string> = new Set<string>();
    const entitiesData: Map<string, EntityData> = new Map<string, EntityData>();

    // initialize parentChildRelations & entitiesData
    for (const entityData of entities) {
      parentChildRelations.set(entityData.iri, []); // initialize with empty array
      entitiesData.set(entityData.iri, entityData);
    }

    if (showSiblingsOnInit) {
      // additionally load siblings from api
      const realEntityType = entityType || mainEntity.getType();
      const entityTypeForQuery =
        realEntityType == "individual" ? "class" : realEntityType; // TODO: only relevant for entityType == "individual" (maybe we don't even need this as behaviour for individual hierarchies is not yet determined)

      const promises: Promise<void>[] = [];
      for (const entityData of entities) {
        if (entityData.iri != mainEntity.getIri()) {
          promises.push(
            new Promise((resolve) =>
              this.getChildren(
                entityData.iri,
                entityTypeForQuery,
                ontologyId,
                includeObsoleteEntities,
                useLegacy,
                parameter || "",
              )
                .then((children) =>
                  children.map((child) => this.entityToEntityData(child)),
                )
                .then((children) => {
                  const parChildRel: ParentChildRelation[] = [];
                  for (const child of children) {
                    entitiesData.set(child.iri, child);
                    if (child.parents) {
                      const parRelation = child.parents.filter(
                        (par) => par.value == entityData.iri,
                      );
                      parChildRel.push({
                        childIri: child.iri,
                        childRelationToParent:
                          parRelation.length > 0 && parRelation[0].getMetadata()
                            ? parRelation[0].getMetadata()[
                                "childRelationToParent"
                              ]
                            : undefined,
                      });
                    } // should have exactly one element
                  }

                  parentChildRelations.set(entityData.iri, parChildRel);
                  allChildrenPresent.add(entityData.iri);
                })
                .then(resolve),
            ),
          );
        }
      }

      await Promise.allSettled(promises);

      // TODO: only relevant for entityType == "individual" (maybe we don't even need this as behaviour for individual hierarchies is not yet determined)
      if (realEntityType == "individual") {
        for (const parentReified of mainEntity.getParents()) {
          const children = (
            await this.getChildren(
              parentReified.value,
              realEntityType,
              ontologyId,
              includeObsoleteEntities,
              useLegacy,
              parameter || "",
            )
          ).map((child) => this.entityToEntityData(child));

          const parChildRel: ParentChildRelation[] = [];
          for (const child of children) {
            parChildRel.push({
              childIri: child.iri,
              childRelationToParent:
                "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            });
          }
          parentChildRelations.set(parentReified.value, parChildRel);
        }
      }
    } else {
      for (const entityData of entities) {
        if (entityData.parents) {
          const parents = entityData.parents.filter(
            (parentReified: Reified<string>) => !isTop(parentReified.value),
          );
          if (
            entityData.iri == mainEntity?.getIri() &&
            isIndividualTypeName(entityType || mainEntity.getType())
          ) {
            for (const parentReified of parents) {
              if (parentChildRelations.has(parentReified.value)) {
                parentChildRelations.get(parentReified.value)?.push({
                  childIri: entityData.iri,
                  childRelationToParent:
                    "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
                });
              }
            }
          } else {
            for (const parentReified of parents) {
              if (parentChildRelations.has(parentReified.value)) {
                parentChildRelations.get(parentReified.value)?.push({
                  childIri: entityData.iri,
                  childRelationToParent: parentReified.getMetadata()
                    ? parentReified.getMetadata()["childRelationToParent"]
                    : undefined,
                });
              }
            }
          }
        }
      }
    }

    // sort parentChildRelations
    for (const rel of parentChildRelations.values())
      rel.sort((a, b) =>
        (entitiesData.get(a.childIri)?.label || a.childIri).localeCompare(
          entitiesData.get(b.childIri)?.label || b.childIri,
        ),
      );
    /* --- */

    /* BUILD rootEntities */
    const rootEntities: string[] = [];
    if (preferredRoots) {
      const preferredRootEntities = (
        await this.ontologyService.getOntologyObject(
          ontologyId,
          undefined,
          useLegacy,
        )
      ).getPreferredRoots();
      for (const e of preferredRootEntities) {
        if (entitiesData.has(e)) rootEntities.push(e);
      }
    } else {
      for (const entityData of entities) {
        if (entityData.parents) {
          const parents = entityData.parents.filter(
            (parentReified: Reified<string>) => !isTop(parentReified.value),
          );
          if (parents.length == 0) rootEntities.push(entityData.iri);
        }
      }
    }

    /* --- */

    function createTreeNode(
      entityData: EntityData,
      cycleCheck: Set<string>,
      childRelationToParent?: string,
    ): TreeNode {
      cycleCheck.add(entityData.iri); // add current entity to cycle check set

      const node = new TreeNode(entityData);
      node.childRelationToParent = childRelationToParent;
      const children = parentChildRelations.get(entityData.iri) || [];

      for (const child of children) {
        if (cycleCheck.has(child.childIri)) {
          // cyclic tree, skip cycle
          console.error(`Cyclic tree at entity "${child.childIri}".`);
          continue;
        }

        const childData = entitiesData.get(child.childIri);
        if (childData != undefined)
          node.addChild(
            createTreeNode(childData, cycleCheck, child.childRelationToParent),
          );
      }

      if (node.loadedChildren.length > 0) node.expanded = true;

      cycleCheck.delete(entityData.iri);
      return node;
    }

    const cycleCheck: Set<string> = new Set<string>(); // Contains iris of all entities that have occurred within the current recursion branch. Is used to check for cycles.

    return new Hierarchy({
      parentChildRelations: parentChildRelations,
      entitiesData: entitiesData,
      allChildrenPresent: allChildrenPresent,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      roots: rootEntities
        .map((rootEntity) =>
          createTreeNode(entitiesData.get(rootEntity)!, cycleCheck),
        )
        .sort((a, b) =>
          (a.entityData.label || a.entityData.iri).localeCompare(
            b.entityData.label || b.entityData.iri,
          ),
        ),
      api: new OlsHierarchyApi(this.axiosInstance.getUri()),
      ontologyId: ontologyId,
      includeObsoleteEntities: includeObsoleteEntities,
      entityType: entityType,
      mainEntityIri: mainEntity?.getIri(),
      keepExpansionStates: props.keepExpansionStates,
      useLegacy: useLegacy,
      parameter: parameter,
    });
  }

  public async loadHierarchyChildren(
    props: LoadHierarchyChildrenProps,
  ): Promise<EntityData[]> {
    if (props.entityType == undefined)
      throw Error("EntityType has to be provided to load children in OLS.");

    return (
      await this.getChildren(
        props.nodeToExpand.entityData.iri,
        props.entityType,
        props.ontologyId,
        props.includeObsoleteEntities,
        props.useLegacy,
        props.parameter || "",
      )
    ).map((entity) => this.entityToEntityData(entity));
  }
}
