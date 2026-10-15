import { UseCollectionStatisticsResult } from '../../../app';
/**
 * React hook returning the statistics of a collection of the TS4NFDI API
 * Gateway.
 *
 * @example
 * const { ontologiesData, isLoading } = useCollectionStatistics({
 *   collectionId: "dc45621d-7e40-47ce-9616-4133f0b54edf",
 * });
 */
export declare function useCollectionStatistics(props: {
    statisticsApi: any;
    collectionId: string | undefined;
    enabled: boolean;
}): UseCollectionStatisticsResult;
