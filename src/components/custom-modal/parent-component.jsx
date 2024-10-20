import { useState } from "react";
import Modal from "./modal";


function ParentOfModal(){

    const [modal, setModal] = useState(false);

    function handleClick(){
        setModal(!modal);
    }

    return(
        <div className="wrapper">
            <button onClick={handleClick}>Click to Open Modal</button>
            {
                modal && <Modal onClose={handleClick}/>
            }
        </div>
    )


}

export default ParentOfModal;