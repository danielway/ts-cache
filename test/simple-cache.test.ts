import {SimpleCache} from "../src/simple-cache";

describe("SingleCache", () => {

    it("should be instantiable with a getter", () =>
        expect(new SimpleCache(() => "value"))
            .toBeDefined());

    it("should call the getter on first run", () => {
        let hasRun = false;
        const cache = new SimpleCache(() => {
            hasRun = true;
            return "value";
        });

        expect(hasRun).toBeFalsy();
        cache.get();
        expect(hasRun).toBeTruthy();
    });

    it("should not call the getter on subsequent runs", () => {
        let hasRun = false;
        const cache = new SimpleCache(() => {
            hasRun = true;
            return "value";
        });

        cache.get();
        hasRun = false;

        cache.get();
        expect(hasRun).toBeFalsy();
    });

    it("should clear its value", () => {
        let hasRun = false;
        const cache = new SimpleCache(() => {
            hasRun = true;
            return "value";
        });

        cache.get();
        hasRun = false;

        cache.clear();
        cache.get();
        expect(hasRun).toBeTruthy();
    });

});
