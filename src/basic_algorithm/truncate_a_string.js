function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}

module.exports = {
    truncateString
}
