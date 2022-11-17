import { GetRandomIntInclusive, CalculateAverage } from "./Utils";

function GenerateWeights(rowCount, colCount) {
    let array = [];

    for (let i = 0; i < rowCount; i++) {
        array.push([]);
        
        for (let j = 0; j < colCount; j++) {
            array[i].push(GetRandomIntInclusive(1, 10));
        }
    }

    return array;
}

function CalculateAverages(weights, rowCount) {
    let array = [];

    for (let i = 0; i < rowCount; i++) {
        array.push(CalculateAverage(weights[i], weights[i].length));
    }

    return array;
}

export default function ExpertsWeightsModel(criteriasCount, expertsCount) {
    this.criteriasCount = criteriasCount;
    this.expertsCount = expertsCount;
    this.weights = GenerateWeights(criteriasCount, expertsCount);
    this.averageCriteriaWeights = CalculateAverages(this.weights, criteriasCount);
    this.averageWeight = CalculateAverage(this.averageCriteriaWeights, criteriasCount);
};