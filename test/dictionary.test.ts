import { Dictionary } from "../src/dictionary";

describe("Dictionary", () => {

    it("should be instantiable", () =>
        expect(new Dictionary<number, string>())
           .toBeDefined());

    it("should get and set values", () => {
       const dictionary = new Dictionary<number, string>();
       expect(dictionary.get(1))
           .toBeUndefined();

       dictionary.set(1, "one");
       expect(dictionary.get(1))
           .toBe("one");
    });

    it("should update existing values", () => {
        const dictionary = new Dictionary<number, string>();
        dictionary.set(1, "one");
        expect(dictionary.get(1))
            .toBe("one");

        dictionary.set(1, "one updated");
        expect(dictionary.get(1))
            .toBe("one updated");
    });

    it("should remove one value", () => {
        const dictionary = new Dictionary<number, string>();
        dictionary.set(1, "one");
        dictionary.set(2, "two");

        expect(dictionary.get(1)).toBe("one");
        expect(dictionary.get(2)).toBe("two");

        dictionary.remove(1);

        expect(dictionary.get(1)).toBeNull();
        expect(dictionary.get(2)).toBe("two");
    });

    it("should remove all values", () => {
        const dictionary = new Dictionary<number, string>();
        dictionary.set(1, "one");
        dictionary.set(2, "two");

        expect(dictionary.get(1)).toBe("one");
        expect(dictionary.get(2)).toBe("two");

        dictionary.remove();

        expect(dictionary.get(1)).toBeNull();
        expect(dictionary.get(2)).toBeNull();
    });

    it("should be undefined for nonexistent keys", () =>
        expect(new Dictionary<number, string>().get(1))
            .toBeUndefined());

    it("should be null for removed keys", () => {
        const dictionary = new Dictionary<number, string>();
        dictionary.set(1, "one");
        dictionary.remove(1);

        expect(dictionary.get(1))
            .toBeNull();
    });

    it("should correctly evaluate numeric keys", () => {
        const dictionary = new Dictionary<number, string>();
        dictionary.set(1, "one");

        expect(dictionary.get(1))
            .toBe("one");
    });

    it("should correctly evaluate string keys", () => {
        const dictionary = new Dictionary<string, number>();
        dictionary.set("one", 1);

        expect(dictionary.get("one"))
            .toBe(1);
    });

    it("should correctly evaluate pointers to the same object keys", () => {
        const key = { prop1: 1, prop2: "two" };
        const dictionary = new Dictionary<{ prop1: number, prop2: string }, string>();
        dictionary.set(key, "value");

        expect(dictionary.get(key))
            .toBe("value");
    });

    it("should correctly evaluate convenient object keys", () => {
        const dictionary = new Dictionary<{ prop1: number, prop2: string }, string>();
        dictionary.set({ prop1: 1, prop2: "two" }, "value");

        expect(dictionary.get({ prop1: 1, prop2: "two" }))
            .toBe("value");
    });

    it("should correctly evaluate inconvenient object keys", () => {
        const dictionary = new Dictionary<{ prop1: number, prop2: string }, string>();
        dictionary.set({ prop1: 1, prop2: "two" }, "value");

        expect(dictionary.get({ prop2: "two", prop1: 1 }))
            .toBe("value");
    });

});
