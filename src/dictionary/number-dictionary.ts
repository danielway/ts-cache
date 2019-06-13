import {Dictionary} from "./dictionary";

export class NumberDictionary<V> extends Dictionary<number, V> {

    private map: { [key: number]: V; } = { };

    public get(key: number): V | undefined {
        return this.map[key];
    }

    public set(key: number, val: V): void {
        this.map[key] = val;
    }

}
