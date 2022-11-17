function CalculateAverage(array, length) {
    let sum = 0;
   
    for (let i = 0; i < length; i++) {
        sum += array[i];
    }

    return parseFloat((sum / length).toFixed(2));
}

function CalculateAveragePred(array, length, pred) {
    let sum = 0;
   
    for (let i = 0; i < length; i++) {
        sum += pred(array[i]);
    }

    return parseFloat((sum / length).toFixed(2));
}

function GetRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export { CalculateAverage, GetRandomIntInclusive, CalculateAveragePred };