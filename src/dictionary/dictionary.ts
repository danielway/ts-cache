/**
 * A basic dictionary interface for use in caching.
 */
export abstract class Dictionary<K, V> {

    /**
     * Retrieves a value from the dictionary that corresponds to the given key, or null if none exists.
     * @param key The unique identifier whose value to retrieve.
     */
    public abstract get(key: K): V | null;

    /**
     * Inserts or updates a unique identifier's value in the dictionary.
     * @param key The identifier unique to this dictionary.
     * @param val The new value to correspond to the specified key.
     */
    public abstract set(key: K, val: V): void;

}
