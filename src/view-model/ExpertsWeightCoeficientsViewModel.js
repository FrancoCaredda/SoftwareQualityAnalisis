import { ExpertWeightCoeficients, ExpertsWeightCoeficientsTable } from "../model/ExpertsWeightCoeficients";

function GenerateViewModel(model) {
    let array = model.coeficients.map( (e) => { return [e.absolute, e.relative]; } );
    array.push([model.absoluteAverage, model.relativeAverage]);

    return array;
}

export default function ExpertsWeightCoeficientsViewModel(expertsCount) {
    this.model = new ExpertsWeightCoeficientsTable(expertsCount);
    this.viewModel = GenerateViewModel(this.model);
};