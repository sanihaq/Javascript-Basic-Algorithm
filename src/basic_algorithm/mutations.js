function mutation(arr) {
    // let v1 = arr[0].toLowerCase().split('');
    let v2 = arr[1].toLowerCase().split('');
    for (let i = 0; i < v2.length; i++) {
        // if (!v1.includes(v2[i])) return false;
        if (arr[0].toLowerCase().indexOf(v2[i]) < 0) return false;
    }
    return true;
}

module.exports = {
    mutation
}
