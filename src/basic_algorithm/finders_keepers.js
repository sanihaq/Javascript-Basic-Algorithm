function findElement(arr, func) {
    let num;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) return arr[i];
    }
    return num;
}

module.exports = {
    findElement
}
