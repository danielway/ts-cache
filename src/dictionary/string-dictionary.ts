import { Dictionary } from "./dictionary";

export class StringDictionary<V> extends Dictionary<string, V> {

    private map: { [key: string]: V; } = { };

    public get(key: string): V | undefined {
        return this.map[key];
    }

    public set(key: string, val: V): void {
        this.map[key] = val;
    }

}
