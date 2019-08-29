import * as equal_ from "fast-deep-equal";
const equal = equal_;

/**
 * A simple dictionary implementation, backed by deep-equivalence checks for complex key types.
 */
export class Dictionary<K, V> {

    private map: Array<{ key: K, val: V | null }> = [];

    /**
     * Retrieves a value from the dictionary that corresponds to the given key, or null if none exists.
     * @param key The unique identifier whose value to retrieve.
     * @returns The value if found, null if the key exists with no value, or undefined if the key has never been set.
     */
    public get(key: K): V | null | undefined {
        const match = this.findInMap(key);
        return match ? match.val : undefined;
    }

    /**
     * Inserts or updates a unique identifier's value in the dictionary.
     * @param key The identifier unique to this dictionary.
     * @param val The new value to correspond to the specified key.
     */
    public set(key: K, val: V): void {
        const match = this.findInMap(key);
        if (match) {
            match.val = val;
        } else {
            this.map.push({ key, val });
        }
    }

    /**
     * Removes the specified keys' values from the dictionary, or all values if no keys are specified. Note that this
     * does not remove the keys, only their values.
     * @param keys The unique identifiers whose values to remove, or null/empty list to clear the dictionary.
     */
    public remove(...keys: K[]): void {
        if (keys && keys.length > 0) {
            keys.forEach((key) => {
                const match = this.findInMap(key);
                if (match) {
                    match.val = null;
                }
            });
        } else {
            this.map.forEach((kvp) => kvp.val = null);
        }
    }

    /**
     * Searches the cache's underlying collection for the specified key. Returns the matching KVP or undefined if the
     * key has never been set for this dictionary.
     * @param key The unique identifier to search for.
     */
    private findInMap(key: K): { key: K, val: V | null } | undefined {
        const match = this.map.find((item) => equal(item.key, key));
        if (match) {
            return match;
        } else {
            return undefined;
        }
    }

}
