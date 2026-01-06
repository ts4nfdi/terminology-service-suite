import { BuildHierarchyProps, HierarchyBuilder, HierarchyIriProp, LoadHierarchyChildrenProps } from '../../model/interfaces/HierarchyBuilder';
import { Hierarchy } from '../../model/interfaces/Hierarchy';
import { EntityData } from '../../app';
export declare class SkosApi implements HierarchyBuilder {
    private axiosInstance;
    constructor(api: string);
    private makeCall;
    buildHierarchyWithIri(props: BuildHierarchyProps & HierarchyIriProp): Promise<Hierarchy>;
    loadHierarchyChildren(props: LoadHierarchyChildrenProps): Promise<EntityData[]>;
}
