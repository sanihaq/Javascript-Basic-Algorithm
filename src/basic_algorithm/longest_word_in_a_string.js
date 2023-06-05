function findLongestWordLength(str) {
    let longest = '';
    str.split(' ').forEach((v) => {
        if (v.length > longest.length) longest = v;
    })
    return longest.length;
}

module.exports = {
    findLongestWordLength
}
