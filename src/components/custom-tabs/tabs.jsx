import { useState } from "react";
import './styles.css';

export default function Tabs({tabsContent, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(null);


    function handleOnClick(currentTabIndex){
        setCurrentTabIndex(currentTabIndex);
        onChange(currentTabIndex);
    }

    return(
        <div className="wrapper">



            <div className="heading">
                {
                    tabsContent.map((tabItem, index) =>
    
                        <div className={`tab-item ${currentTabIndex === index ? "active" : "inactive"}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
                            <span className="label">{tabItem.label}</span>
                        </div>
                    
                    )
                }
            </div>

            <div className="content">
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    );



}