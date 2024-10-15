import { useEffect, useState } from "react";


function ImageSlider({url, page, limit}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(){
        try{
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            console.log(response);
        }
    }

    useEffect(() => {
        console.log("Use Effect running");
        if(url !== "") fetchImages();
    }, [url])

    return(
        <div className="container"></div>
    );


}

export default ImageSlider;