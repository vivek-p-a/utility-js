const map = (items, callback) => {
    let tempArray = []
    items.forEach(element => {
        tempArray.push(callback(element))
    });
    return tempArray
}

module.exports = map;
