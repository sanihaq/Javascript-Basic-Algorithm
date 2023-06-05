function repeatStringNumTimes(str, num) {
    // if (num < 0) return "";
    // return str.repeat(num);
    let s = '';
    for (let i = 0; i < num; i++) {
        s += str;
    }
    return s;
}

module.exports = {
    repeatStringNumTimes
}
