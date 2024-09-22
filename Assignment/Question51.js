function uniqueElements(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isUnique = true;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

