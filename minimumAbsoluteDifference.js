function minimumAbsoluteDifference(arr) {
    let minDiffArr = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++){
        minDiffArr.push(Math.abs(arr[i + 1] - arr[i]));
    }
    return Math.min(...minDiffArr);
}