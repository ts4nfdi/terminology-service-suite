import { BuildHierarchyProps, HierarchyBuilder, HierarchyIriProp, LoadHierarchyChildrenProps } from './HierarchyBuilder';
import { Hierarchy } from '../model/interfaces/Hierarchy';
import { EntityData } from '../app/types';
export declare class OntoPortalApi implements HierarchyBuilder {
    private axiosInstance;
    private apiKey;
    constructor(api: string, apiKey: string);
    private makeCall;
    buildHierarchyWithIri(props: BuildHierarchyProps & HierarchyIriProp): Promise<Hierarchy>;
    loadHierarchyChildren(props: LoadHierarchyChildrenProps): Promise<EntityData[]>;
}
