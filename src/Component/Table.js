import { Fragment } from "react";
function Table({data, config, keyFn}){
    const renderedHeaders = config.map((column)=>{
        if(column.header){
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>
    });
    
    const renderedRows = data.map((rowData)=>{
        const renderedCells = config.map((column)=>{
            return <td className="p-3" key={column.label}>{column.render(rowData)}</td>
        });
        return(
            <tr className="border-b" key={keyFn(rowData)} >
                {renderedCells}
                {/* <td className="p-3">{fruit.name}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className="p-3">{fruit.score}</td> */}
            </tr>
            
        )
    });
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                   {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}
export default Table;