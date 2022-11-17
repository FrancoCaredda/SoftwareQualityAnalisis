import ExpertsWeightsModel from "../model/ExpertsWeightsModel";

function GenerateViewModel(model) {
    let array = [...model.weights];

    for (let i = 0; i < model.criteriasCount; i++) {
        array[i].push(model.averageCriteriaWeights[i]);
    }

    return array;
}

export default function ExpertsWeightsViewModel(criteriasCount, expertsCount) {
    this.model = new ExpertsWeightsModel(criteriasCount, expertsCount);
    this.viewModel = GenerateViewModel(this.model);
};