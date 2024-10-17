import { useState } from "react";
import MenuList from "./menu-list";
import {FaPlus, FaMinus} from 'react-icons/fa'

function MenuItem({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(getCurrentLabel){

        setDisplayCurrentChildren({
            // ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel]
        });

    }

    // displayCurrentChildren = {
    //     Profile: true,
    //     Details: true,
    //     Location: false
    // }

    console.log(displayCurrentChildren);

    return(
        <li>
            <div style={
                {
                    display: "flex",
                    gap: "20px"
                }
            }>
                <p>{item.label}</p>
                {
                    item.children && item.children.length ? 
                     <span onClick={() => handleToggleChildren(item.label)}> 
                     {
                        displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus size={15}/>
                     }
                     </span> : null
                }

            </div>

            {
                item.children && item.children.length && displayCurrentChildren[item.label] ? <MenuList list={item.children} /> : null
            }

        </li>
    )



}

export default MenuItem;