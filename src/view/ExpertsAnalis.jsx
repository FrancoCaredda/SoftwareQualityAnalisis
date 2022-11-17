import React, { useEffect, useState } from "react";
import CriteriasPointsViewModel from "../view-model/CriteriasPointsViewModel";
import ExpertsWeightCoeficientsViewModel from "../view-model/ExpertsWeightCoeficientsViewModel";
import ExpertsWeightsViewModel from "../view-model/ExpertsWeightsViewModel";
import Table from "./Table";
import "./style/expets-analisis-page.css";

const criteriasHeader = [
    "Критерії оцінювання ПЗ", 
    "Галузь застосування",
    "Зручність використання",
    "Програмування",
    "Узагальнені користувачів",
    "Середнє значення оцінки критерію"
];
const criteriasRowHeader = [
    "Точність управління та обчислень", 
    "Ступінь стандартності інтерфейсів",
    "Функціональна повнота можливостей ПЗ",
    "Стійкість до помилок користувача",
    "Можливість розширення функцій",
    "Зручність виконання завдань",
    "Простота в обслуговуванні ПЗ",
    "Відповідність чинним стандартам",
    "Переносність між програмно-апаратного забезпеченням",
    "Зручність навчання користувачів",
    "Cередня кількість балів "
];
const expertsTableHeader = [
    "Ролі експертів",
    "Абсолютний коефіцієнт вагомості",
    "Відносний коефіцієнт вагомості"
];
const expertsTableRowHeader = [
    "Експерт галузі застосування",
    "Експерт зручності використання",
    "Експерт з програмування",
    "Експерт - усереднені користувачі",
    "Загальна кількість балів"
];
const expertsWeightsTableHeader = [...criteriasHeader];
expertsWeightsTableHeader[expertsWeightsTableHeader.length - 1] = "Cередні ваги критеріїв";
const expertsWeightsTableRowHeader = criteriasRowHeader.slice(0, criteriasRowHeader.length - 1);


export default function ExpertsAnalis() {
    const [criteriasViewModel, setCriteriasViewModel] = useState(new CriteriasPointsViewModel(10, 4));
    const [expertsCoeficientsViewModel, setExprertsCoeficientsViewModel] = useState(new ExpertsWeightCoeficientsViewModel(4));
    const [expertsWeightsViewModel, setExpertsWeightsViewModel] = useState(new ExpertsWeightsViewModel(10, 4));

    useEffect(() => {
        console.log(expertsWeightsViewModel);
    },[]);

    return (
        <div className="experts-analisis-body">
            <div className="analis-table">
                <h2>Критерії оцінювання якості ПЗ, їхні вагові коефіцієнти та оцінки експертів</h2>
                <Table header={criteriasHeader} rowNames={criteriasRowHeader} data={criteriasViewModel.viewModel} numeration={true} />
            </div>
            <div className="analis-table">
                <h2>Вплив оцінки експерта на критерій</h2>
                <Table header={expertsWeightsTableHeader} rowNames={expertsWeightsTableRowHeader} data={expertsWeightsViewModel.viewModel} numeration={true} />
                <h3>Середня вага: {expertsWeightsViewModel.model.averageWeight}</h3>
            </div>
            <div className="analis-table">
                <h2>Ролі експертів і коефіцієнти їхньої вагомості</h2>
                <Table header={expertsTableHeader} rowNames={expertsTableRowHeader} data={expertsCoeficientsViewModel.viewModel} numeration={true} />
            </div>
        </div>
    )
}