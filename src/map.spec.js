const map = require('./map');

describe('Map', () => {

    it('map([], cube) should give []', () => {
        const cube = (item) => item**3
        expect(map([], cube)).toEqual([]);
    });

    it('map([1,2,3], identity) should give [1,2,3]', () => {
        const identity = (item) => item
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });


    it('map([1,2,3], cube) should give [1,8,27]', () => {
        const cube = (item) => item**3
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    });

    it('map([a{x : 10}],someObject => someObject.x + 1) -> [11]', () => {
     const testFunc = (someObject) => someObject.x + 1
     expect(map([{x:10}],testFunc)).toEqual([11]);
    });

})
