import CriteriasPoints from "../model/CriteriasPoints";

function GenerateViewModel(model, rowCount, colCount) {
    let array = [...model.points];

    for (let i = 0; i < rowCount; i++) {
        array[i].push(model.criteriaAveragePoints[i]);
    }

    array.push([]);
    for (let i = 0; i < colCount; i++) {
        array[rowCount].push(model.expertsAveragePoints[i]);
    }
    
    array[rowCount].push(model.criteriasAverage);
    return array;
}

function CriteriasPointsViewModel(criteriasCount, usersCount) {
    this.criteriasCount = criteriasCount;
    this.usersCount = usersCount;
    this.model = new CriteriasPoints(this.criteriasCount, this.usersCount);
    this.viewModel = GenerateViewModel(this.model, criteriasCount, usersCount);
}

export default CriteriasPointsViewModel;