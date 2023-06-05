function confirmEnding(str, target) {
    // return str.endsWith(target);
    return str.substring(str.length - target.length) == target;
}

module.exports = {
    confirmEnding
}
