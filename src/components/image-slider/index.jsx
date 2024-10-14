import { useState } from "react";


function ImageSlider({url, limit}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(){
        setLoading(true);

        const response = await fetch();
    }


}

export default ImageSlider;