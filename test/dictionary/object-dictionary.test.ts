import {ObjectDictionary} from "../../src/dictionary/object-dictionary";
import {ObjectDictionaryKey} from "../../src/dictionary/object-dictionary-key";

describe("ObjectDictionary", () => {
    class TestKey implements ObjectDictionaryKey {
        constructor(
            public propertyOne: string,
            public propertyTwo: number,
        ) { }
        public equals(otherKey: TestKey): boolean {
            return otherKey.propertyOne === this.propertyOne
                && otherKey.propertyTwo === this.propertyTwo;
        }
    }

    // Helper to prepare a ObjectDictionary for testing
    const setupDictionary = (items: Array<{key: TestKey, val: string}>): ObjectDictionary<TestKey, string> => {
        const dictionary = new ObjectDictionary<TestKey, string>();
        items.forEach((item) => dictionary.set(item.key, item.val));
        return dictionary;
    };

    it("should set and get values", () => {
        const actualValues = [
            { key: new TestKey("propertyOneValue", 1), val: "Item value 1" },
        ];
        const dictionary = setupDictionary(actualValues);

        actualValues.forEach((actualValue) =>
            expect(dictionary.get(actualValue.key)).toEqual(actualValue.val));
    });

    it("should return undefined for nonexistent keys", () => {
        const dictionary = setupDictionary([]);

        expect(dictionary.get(new TestKey("testKeyString", 1))).toBeUndefined();
    });

});
