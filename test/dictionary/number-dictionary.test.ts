import {NumberDictionary} from "../../src/dictionary/number-dictionary";

describe("NumberDictionary", () => {

    // Helper to prepare a NumberDictionary for testing
    const setupDictionary = (items: Array<{key: number, val: string}>): NumberDictionary<string> => {
        const dictionary = new NumberDictionary<string>();
        items.forEach((item) => dictionary.set(item.key, item.val));
        return dictionary;
    };

    it("should set and get values", () => {
        const actualValues = [
            { key: 1, val: "Item value 1" },
        ];
        const dictionary = setupDictionary(actualValues);

        actualValues.forEach((actualValue) =>
            expect(dictionary.get(actualValue.key)).toEqual(actualValue.val));
    });

    it("should return undefined for nonexistent keys", () => {
        const dictionary = setupDictionary([]);

        expect(dictionary.get(1)).toBeUndefined();
    });

});
