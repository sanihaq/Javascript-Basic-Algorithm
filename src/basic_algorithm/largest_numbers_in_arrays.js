function largestOfFour(arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        let large = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > large || large == 0) large = arr[i][j];
        }
        a.push(large);
    }
    return a;
}

module.exports = {
    largestOfFour
}
