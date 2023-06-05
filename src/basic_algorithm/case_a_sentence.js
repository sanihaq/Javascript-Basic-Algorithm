function titleCase(str) {
    let strArr = str.split(" ");
    let s = [];
    for (let i = 0; i < strArr.length; i++) {
        const x = strArr[i].toLowerCase();
        s.push(x[0].toUpperCase() + x.slice(1));
    }
    return s.join(" ");
}

module.exports = {
    titleCase
}
