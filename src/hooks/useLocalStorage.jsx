import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue){

    console.log("useLocalStorage called");

    const [value, setValue] = useState(() => {
        console.log("Inside Initialiser Function");
        return localStorage.getItem(key) || defaultValue;
    });
    console.log(value);

    console.log("Line 13"); 
    
    useEffect(() => {
        console.log("Inside useEffect");
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
