import Accordion from "../Component/Accordion";
function AccordionPage(){
    const items = [
        {   
            id:'nn',
            label:'Can I use a React on a Proect??',
            content: 'Yes ofcourse, you can do anything. You can use React on any Project you want!!!'
        },
        {
            id:'nm',
            label:'Can I use a Javascript on a Proect??',
            content: 'Yes ofcourse, you can do anything. You can use Javascript on any Project you want!!!'
        },
        {
            id:'nb',
            label:'Can I use a CSS on a Proect??',
            content: 'Yes ofcourse, you can do anything. You can use CSS on any Project you want!!!'
        }
    ]
    return(
        <div>
            <Accordion items={items}/>
        </div>
    )
}

export default AccordionPage;