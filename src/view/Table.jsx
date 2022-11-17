import { React, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import "./style/table.css";


function TableHeader(props) {
    const [header, setHeader] = useState(props.header);
    const [numeration, setNumeration] = useState(props.numeration);

    return (
        <thead>
            <tr>
                {(numeration) ? <th>№</th> : <></>}
                { header.map( (e) => { return <th>{e}</th> } ) }
            </tr>
        </thead>
    );
}

function TableRow(props) {
    const [rowName, setRowName] = useState(props.name);
    const [rowData, setRowData] = useState(props.data);
    const [numeration, setNumeration] = useState(props.numeration);
    const [index, setIndex] = useState(props.index);

    return (
        <tr>
            {(numeration) ? <th>{index}</th> : <></>}
            {(numeration) ? <td>{rowName}</td> : <th>{rowName}</th>}
            { rowData.map( (e) => { return <td>{e}</td> } ) }
        </tr>
    );
}

export default function Table(props) {
    const [header, setHeader] = useState(props.header);
    const [rowNames, setRowNames] = useState(props.rowNames);
    const [data, setData] = useState(props.data);
    const [numeration, setNumeration] = useState(props.numeration)

    return (
        <div className="data-table">
            <table className="table table-bordered">
                <TableHeader header={header} numeration={numeration}/>
                <tbody>
                    {
                        rowNames.map((element, index) => {
                            return <TableRow name={element} data={data[index]} numeration={numeration} index={index + 1} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}