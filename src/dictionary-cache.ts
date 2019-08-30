import { Dictionary } from "./dictionary";

/**
 * A dictionary-backed synchronous cache where each unique key's result from the loadValue instruction is cached.
 */
export class DictionaryCache<K, V> {

    private dictionary = new Dictionary<K, V>();

    /**
     * Instantiates a new dictionary cache with instructions to retrieve values corresponding to a given key.
     * @param loadValue The instructions to retrieve a key's value.
     */
    constructor(
        private loadValue: (key: K) => V,
    ) {}

    /**
     * Retrieve's the given key's value, either from cache or through the given instructions.
     * @param key The unique key whose value to retrieve.
     */
    public get(key: K): V {
        const match = this.dictionary.get(key);
        if (match) {
            return match;
        } else {
            const val = this.loadValue(key);
            this.dictionary.set(key, val);
            return val;
        }
    }

    /**
     * Removes the specified keys from the cache, or all keys if none specified.
     * @param keys The keys to remove, or all if null/empty.
     */
    public remove(...keys: K[]): void {
        this.dictionary.remove(...keys);
    }
}
