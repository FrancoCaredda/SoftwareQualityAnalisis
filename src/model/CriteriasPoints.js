import { CalculateAverage, GetRandomIntInclusive} from "./Utils";

function GenerateTable(rowCount, colCount) {
    let array = [];

    for (let i = 0; i < rowCount; i++) {
        array.push([]);
        for (let j = 0; j < colCount; j++) {
            if (j == (colCount - 1)) {
                array[i].push(GetRandomIntInclusive(1, 10) + parseFloat((GetRandomIntInclusive(0, 99) / 100).toFixed(2)));
            } else {
                array[i].push(GetRandomIntInclusive(1, 10));
            }
        }
    }

    return array;
}

function CalculateAveragePoints(points, rowCount, colCount) {
    let averagePoints = [];

    for (let i = 0; i < rowCount; i++) {
        let sum = 0;
        for (let j = 0; j < colCount; j++) {
            sum += points[i][j];
        }

        averagePoints.push(parseFloat((sum / colCount).toFixed(2)));
    }

    return averagePoints;
}

function CalculateExpertsAveragePoints(points, rowCount, colCount) {
    let averagePoints = [];

    for (let j = 0; j < colCount; j++) {
        let sum = 0;
        for (let i = 0; i < rowCount; i++) {
            sum += points[i][j];
        }

        averagePoints.push(parseFloat((sum / rowCount).toFixed(2)));
    }

    return averagePoints;
}

function CriteriasPoints(criteriasCount, 
                        usersCount) {
    this.criteriasCount = criteriasCount;
    this.usersCount = usersCount;
    this.points = 
        GenerateTable(criteriasCount, usersCount);
    this.criteriaAveragePoints =
        CalculateAveragePoints(this.points, criteriasCount, usersCount);
    this.expertsAveragePoints = 
        CalculateExpertsAveragePoints(this.points, criteriasCount, usersCount);
    this.criteriasAverage = 
        CalculateAverage(this.criteriaAveragePoints, criteriasCount);
}

export default CriteriasPoints;