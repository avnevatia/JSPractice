function MaxChar (str) {
    const MAX_CHAR_COUNT = {};
    let max = 0;
    let maxChar;

    for (let char of str) {
        MAX_CHAR_COUNT[char]++ || (MAX_CHAR_COUNT[char] = 1);
    }

    console.log(MAX_CHAR_COUNT);

    for (let char in MAX_CHAR_COUNT) {
        if(max < MAX_CHAR_COUNT[char]) {
            max = MAX_CHAR_COUNT[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(MaxChar("test here"));
