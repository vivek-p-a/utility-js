const filter = (items, callback) => {
    let filterCondition
    let tempArray = []
    items.forEach(element => {
        filterCondition = callback(element)
        if (filterCondition) {
        tempArray.push(element)
        }
    });
    return tempArray
}

module.exports = filter;
