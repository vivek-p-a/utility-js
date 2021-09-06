const min = (items) => {
    let minimumValue = items[0]
    items.forEach(element => {
        if(element < minimumValue) {
            minimumValue = element
        }
    });
    return minimumValue
}
module.exports = min;
