import {StringDictionary} from "../../src/dictionary/string-dictionary";

describe("StringDictionary", () => {

    // Helper to prepare a StringDictionary for testing
    const setupDictionary = (items: Array<{key: string, val: string}>): StringDictionary<string> => {
        const dictionary = new StringDictionary<string>();
        items.forEach((item) => dictionary.set(item.key, item.val));
        return dictionary;
    };

    it("should set and get values", () => {
        const actualValues = [
            { key: "a", val: "Item value 1" },
        ];
        const dictionary = setupDictionary(actualValues);

        actualValues.forEach((actualValue) =>
            expect(dictionary.get(actualValue.key)).toEqual(actualValue.val));
    });

    it("should return undefined for nonexistent keys", () => {
        const dictionary = setupDictionary([]);

        expect(dictionary.get("a")).toBeUndefined();
    });

});
