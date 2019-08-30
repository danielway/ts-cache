import {DictionaryCache} from "../src/dictionary-cache";

describe("DictionaryCache", () => {

    it("should be instantiable with a getter", () =>
        expect(new DictionaryCache(() => "value"))
            .toBeDefined());

    it("should call the getter on first run", () => {
        let hasRun = false;
        const cache = new DictionaryCache<number, string>((key: number) => {
            hasRun = true;
            return key + " value";
        });

        expect(hasRun).toBeFalsy();
        cache.get(1);
        expect(hasRun).toBeTruthy();
    });

    it("should not call the getter on subsequent runs", () => {
        let hasRun = false;
        const cache = new DictionaryCache<number, string>((key: number) => {
            hasRun = true;
            return key + " value";
        });

        cache.get(1);
        hasRun = false;

        cache.get(1);
        expect(hasRun).toBeFalsy();
    });

    it("should remove a specific value", () => {
        let hasRun = false;
        const cache = new DictionaryCache<number, string>((key: number) => {
            hasRun = true;
            return key + " value";
        });

        cache.get(1);
        cache.get(2);
        hasRun = false;

        cache.remove(1);
        cache.get(2);
        expect(hasRun).toBeFalsy();
        cache.get(1);
        expect(hasRun).toBeTruthy();
    });

    it("should remove all values", () => {
        let hasRun = false;
        const cache = new DictionaryCache<number, string>((key: number) => {
            hasRun = true;
            return key + " value";
        });

        cache.get(1);
        cache.get(2);
        hasRun = false;

        cache.remove();
        cache.get(2);
        expect(hasRun).toBeTruthy();
    });

});
