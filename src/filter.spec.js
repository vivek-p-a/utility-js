const filter = require("./filter");
describe('Filter', () => {
    it("filter([], x => true) should give []", () => {
        const func = (x) => true
        expect(filter([], func)).toEqual([]);
    });

    it("filter([1,2,3],x => true) should give [1,2,3]", () => {
        const func = (x) => true
        expect(filter([1,2,3],func)).toEqual([1,2,3]);
    });

    it("filter([1,2,3],x => false) should give []", () => {
        const func = (x) => false
        expect(filter(['a','b','c'],func)).toEqual([]);
    });

    it("filter([1,2,3],x => x > 1) should give [2,3]", () => {
        const func = (x) => x > 1
        expect(filter([1,2,3],func)).toEqual([2,3]);
    });

    it("filter(['a','B','c','D'], filterUpperCase) should be [B,D] ", () => {
        const func = (x) => x == x.toUpperCase()
        expect(filter(['a','B','c','D'],func)).toEqual(['B','D']);
    });

})
