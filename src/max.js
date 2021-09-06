const max = (items) => {
    let maximumValue = items[0]
    items.forEach(element => {
        if(element > maximumValue) {
            maximumValue = element
        }
    });
    return maximumValue
}
module.exports = max;
