import { EntityTypeName } from '../../model/ModelTypeCheck';
import { Entity } from '../../model/interfaces';
import { JSTreeNode } from '../../utils/olsApiTypes';
import { BuildHierarchyProps, HierarchyBuilder, HierarchyIriProp, LoadHierarchyChildrenProps } from '../HierarchyBuilder';
import { Hierarchy } from '../../model/interfaces/Hierarchy';
import { EntityData } from '../../app';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
export declare const HIERARCHY_WIDGET_DEFAULT_VALUES: {
    readonly INCLUDE_OBSOLETE_ENTITIES: false;
    readonly PREFERRED_ROOTS: false;
    readonly KEEP_EXPANSION_STATES: false;
    readonly SHOW_SIBLINGS_ON_INIT: false;
    readonly USE_LEGACY: false;
    readonly WRAP: false;
};
export declare class OlsHierarchyApi implements HierarchyBuilder {
    protected axiosInstance: AxiosInstance;
    private entityService;
    private ontologyService;
    constructor(api: string | AxiosInstance);
    protected makeCall(url: string, config: AxiosRequestConfig<any> | undefined, useLegacy: boolean): Promise<any>;
    getAncestors(iri: string, entityType: EntityTypeName, ontologyId: string, useLegacy: boolean | undefined, includeObsoleteEntities: boolean | undefined, parameter: string | undefined): Promise<Entity[]>;
    getJSTree(iri: string, entityType: EntityTypeName, ontologyId: string, parameter: string | undefined): Promise<JSTreeNode[]>;
    getChildren(iri: string, entityType: EntityTypeName, ontologyId: string, includeObsoleteEntities: boolean | undefined, useLegacy: boolean | undefined, parameter: string): Promise<Entity[]>;
    getRootEntities(entityType: EntityTypeName, ontologyId: string, preferredRoots?: boolean, includeObsoleteEntities?: boolean, useLegacy?: boolean, parameter?: string): Promise<Entity[]>;
    buildHierarchyWithIri(props: BuildHierarchyProps & HierarchyIriProp): Promise<Hierarchy>;
    jsTreeNodeToEntityData(jsTreeNode: JSTreeNode): EntityData;
    entityToEntityData(entity: Entity): EntityData;
    buildRootHierarchy(props: {
        ontologyId: string;
        entityType: EntityTypeName;
    } & BuildHierarchyProps): Promise<Hierarchy>;
    buildHierarchyWithEntity(props: {
        mainEntity: Entity;
        ontologyId: string;
        entityType: EntityTypeName;
    } & BuildHierarchyProps): Promise<Hierarchy>;
    loadHierarchyChildren(props: LoadHierarchyChildrenProps): Promise<EntityData[]>;
}
