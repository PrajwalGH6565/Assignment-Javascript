function countCharacterOccurrences(str) {
    let counts = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }
    return counts;
}
