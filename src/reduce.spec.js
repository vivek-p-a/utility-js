const reduce = require("./reduce");
describe('Reduce', () => {
    it("reduce([],(x,y)=>x+y) should be undefined", () => {
        const add = (x,y) => {return x+y}
        expect(reduce([], add)).toEqual(undefined);
    });

    it("reduce([],v(x,y)=>x+y,10) should be 10", () => {
        const add = (x,y) => {return x+y}
        expect(reduce([],add,10)).toEqual(10);
    });


    it("reduce(['a','b','c'],(x,y)=>x+y) should be abc", () => {
        const add = (x,y) => {return x+y}
        expect(reduce(['a','b','c'],add)).toEqual("abc");
    });

    it("reduce(['a','b','c'],(x,y)=>x+y,’z’), should be zabc", () => {
        const add = (x,y) => {return x+y}
        expect(reduce(['a','b','c'],add,'z')).toEqual("zabc");
    });

})
