import * as equal_ from "fast-deep-equal";
const equal = equal_;
import { Dictionary } from "./dictionary";

/**
 * A particular implementation of the Dictionary that makes use of deep-equivalence
 * for objects and values of any type.
 */
export class ObjectDictionary<K, V> extends Dictionary<K, V> {

    private map: Array<{ key: K, val: V }> = [];

    public get(key: K): V | null {
        const match = this.findInMap(key);
        if (match) {
            return match.val;
        } else {
            return null;
        }
    }

    public set(key: K, val: V): void {
        const match = this.findInMap(key);
        if (match) {
            match.val = val;
        } else {
            this.map.push({ key, val });
        }
    }

    private findInMap(key: K): { key: K, val: V } | null {
        const matches = this.map.filter((item) => equal(item.key, key));
        if (!matches || matches.length === 0) {
            return null;
        } else if (matches.length > 1) {
            throw new Error("Duplicate keys in object dictionary.");
        } else {
            return matches[0];
        }
    }

}
