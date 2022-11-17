import { CalculateAveragePred, GetRandomIntInclusive } from "./Utils";

function ExpertWeightCoeficients(absolute, relative) {
    this.absolute = absolute;
    this.relative = relative;
}

function GenerateWeightCoeficients(count) {
    let array = [];

    for (let i = 0; i < count; i++) {
        let abs = GetRandomIntInclusive(1, 10);
        array.push(new ExpertWeightCoeficients(abs, abs / 10));
    }

    return array;
}

function ExpertsWeightCoeficientsTable(expertsCount) {
    this.count = expertsCount;
    this.coeficients = GenerateWeightCoeficients(expertsCount);
    this.absoluteAverage = CalculateAveragePred(this.coeficients, this.count, (e) => { return e.absolute; });
    this.relativeAverage = CalculateAveragePred(this.coeficients, this.count, (e) => { return e.relative; });
}

export { ExpertWeightCoeficients, ExpertsWeightCoeficientsTable };