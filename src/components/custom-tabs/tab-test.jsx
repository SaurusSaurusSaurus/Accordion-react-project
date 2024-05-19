import Tabs from "./tabs";
import './tabs.css'

function RandomComponent() {
    return <h1>Some Random component</h1>
}


export default function TabTest() {

    const tabs = [
        {
            label: 'Home',
            content: <div>This is content for Tab 1</div>
        },
        {
            label: 'About Us',
            content: <div>This is content for Tab 2</div>
        },
        {
            label: 'Services',
            content: <RandomComponent/>
        },
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }
    return <Tabs tabsContent ={tabs} onChange={handleChange}/>
}