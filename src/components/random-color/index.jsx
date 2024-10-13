import { useState } from "react"


export default function RandomColor(){

    const [typeOfColor, setTypeOfColor] = useState("hex");

    console.log(typeOfColor);

    function randomColorUtil(length){
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor(){

        let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',]
        let hexColor = "#";

        for(let i = 0; i < 6; i++){
            hexColor = hexColor + randomColorUtil(hex.length);
        }
        console.log(hexColor);

    }

    function handleCreateRandomRgbColor(){

    }


    return(
        <div className="buttons">
            <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button onClick={typeOfColor === "hex" ?
                            handleCreateRandomHexColor :
                            handleCreateRandomRgbColor}>
            Generate Random Color
            </button>
        </div>
    )


}