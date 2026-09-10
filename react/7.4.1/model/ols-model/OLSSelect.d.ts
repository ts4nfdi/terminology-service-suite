import { Select } from '../interfaces/Select';
import { SelectResult } from '../interfaces/SelectResult';
export declare class OLSSelect implements Select {
    properties: SelectResult[];
    constructor(properties: SelectResult[]);
    getTotalSearchResults(): number;
}
