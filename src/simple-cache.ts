/**
 * A simple single-value cache with a specified load instruction.
 */
export class SimpleCache<V> {

    private value: V | undefined;

    /**
     * Instantiates a simple cache with instructions for determining its value when requested.
     * @param loadValue The instructions for loading this cache's value. May be called multiple times.
     */
    constructor(
        private loadValue: () => V,
    ) {}

    /**
     * Retrieve's this cache's value, either from cache or the load instruction.
     */
    public get(): V {
        return this.value
            ? this.value
            : this.value = this.loadValue();
    }

    /**
     * Wipes this cache's value forcing a reload on the next value retrieval.
     */
    public clear(): void {
        this.value = undefined;
    }

}
