//import Table from "../Component/Table";
import SortableTable from "../Component/SortableTable";
function TablePage(){
    
    const data = [
        {
            name:'Orange', color:'bg-orange-500', score:5
        },
        {
            name:'Apple', color:'bg-red-500', score:3
        },
        {
            name:'Banana', color:'bg-yellow-400', score:2
        },
        {
            name:'Kiwi', color:'bg-green-500', score:4
        },
    ];
    const config = [
      {
        label: "Name",
        render: (fruit) => fruit.name,
        sortValue: (fruit) => fruit.name,
      },
      {
        label: "Color",
        render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
      },
      {
        label: "Score",
        render: (fruit) => fruit.score,
        sortValue: (fruit) => fruit.score,
      },
    ];
    const keyFn = (fruit) =>{
        return fruit.name;
    };
    return (
      <div>
        <SortableTable data={data} config={config} keyFn={keyFn}></SortableTable>
      </div>
    );
}
export default TablePage;