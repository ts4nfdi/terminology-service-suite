export default class Reified<T> {
    value: T;
    axioms: any[] | null;
    private constructor();
    static fromJson<T>(jsonNode: any): Reified<T>[];
    hasMetadata(): boolean;
    getMetadata(): any | null;
}
