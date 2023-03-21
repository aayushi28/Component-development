import Table from "../Component/Table";
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
    ]
    return (
        <div>
            <Table data={data}></Table>
        </div>
    )
}
export default TablePage;