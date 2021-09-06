const tail = (items) => {
    if(!items.length)  return []
    return items.slice(1,items.length)
}
module.exports = tail;
