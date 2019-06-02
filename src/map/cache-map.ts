import {CacheItem} from "./cache-item";

export abstract class CacheMap<K, V> {

    protected constructor(
        protected expiryFunction: (item: CacheItem<V>) => boolean,
    ) { }

    public abstract get(key: K): V;

    public abstract set(key: K, val: V): void;

}
