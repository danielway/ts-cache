import {Dictionary} from "./dictionary";
import {ObjectDictionaryKey} from "./object-dictionary-key";

export class ObjectDictionary<K extends ObjectDictionaryKey, V> extends Dictionary<K, V> {

    private map: Array<{ key: K, val: V }> = [];

    public get(key: K): V | undefined {
        const match = this.findInMap(key);
        if (match) {
            return match.val;
        } else {
            return undefined;
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

    private findInMap(key: K): { key: K, val: V } | undefined {
        const matches = this.map.filter((item) => item.key.equals(key));
        if (!matches || matches.length === 0) {
            return undefined;
        } else if (matches.length > 1) {
            throw new Error("Duplicate keys in object dictionary.");
        } else {
            return matches[0];
        }
    }

}
