function reverse (str) {
    let revStr = "";
    for (let char of str) {
        revStr = char + revStr;
    }
    return revStr;
}

function reverse1 (str) {
    return str.split('').reduce((rev, char) => char + rev);
}

console.log(reverse("apple"));
console.log(reverse1("practice"));
