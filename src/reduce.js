let head = require('./head');
let tail = require('./tail');


const reduce = (items, callback,initialValue = null) => {
    let result;
    if (!items.length && !initialValue) return undefined
    if (initialValue) result = initialValue
    if (!initialValue) {
        result = head(items)
        items = tail(items)
    }
    items.forEach(element => {
        result = callback(result,element)
    });
    return result
}

module.exports = reduce;
