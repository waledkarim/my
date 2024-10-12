import { useState } from "react";
import data from "./data";
import './style.css';

function Accordion() {
  const [selected, setSelected] = useState();
  const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? (null) : (getCurrentId));
  }

  function handleMultipleSelection(getCurrentId){
    const cpyMultiple = [...multiple];
    const findIndexOfCuurentID = cpyMultiple.indexOf(getCurrentId);
    if(findIndexOfCuurentID === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCuurentID, 1);
    setMultiple(cpyMultiple);
}

  return (
    <div className="acc-wrapper">
        <button onClick={() => setEnableMultipleSelection(!enableMultipleSelection)}>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? 
          data.map((dataItem) => 
            <div className="item">
              <div
                className="title"
                onClick={enableMultipleSelection ? 
                () => handleMultipleSelection(dataItem.id) : 
                () => handleSingleSelection(dataItem.id)}>

                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultipleSelection ? 
                multiple.indexOf(dataItem.id) !== -1 &&
                <div className="acc-content">{dataItem.answer}</div>
                : selected === dataItem.id && 
                <div className="acc-content">{dataItem.answer}</div>

              }
            </div>
          )
         : 
          <div> No data Found! </div>
        }
      </div>
    </div>
  );
}

export default Accordion;
