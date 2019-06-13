export abstract class Dictionary<K, V> {

    public abstract get(key: K): V | undefined;

    public abstract set(key: K, val: V): void;

}
