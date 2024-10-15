import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'

function ImageSlider({url, page, limit}){

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(){
        try{
            setLoading(true);

            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data){
                setLoading(false);
                setImages(data);
            }
        }catch(error){
            setLoading(false);
            setErrorMsg(error);
        }
    }

    function handleNext(){
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        console.log("Use Effect running");
        if(url !== "") fetchImages();
    }, [url])


    if(loading){
        return <div>Loading Data!! Please Wait</div>
    }

    if(errorMsg){
        return <div>Error occured!! {errorMsg}</div>
    }

    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {
                images && images.length > 0 ? 
                images.map((img,ind) => 
                    <img 
                    key={img.id}
                    src={img.download_url} 
                    alt={img.download_url} 
                    className={currentSlide === ind ? "current-image" : "current-image hide-current-image"} />
                )
                :
                null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    images && images.length > 0 ? 
                    images.map((_, index) => 
                    
                        <button
                         onClick={() => setCurrentSlide(index)}
                         key={index}
                         className={currentSlide === index ? "current-indicator" : "current-indicator hide-current-indicator"}
                        > </button>
                    
                    )
                    : 
                    null
                }
            </span>
        </div>
    );


}

export default ImageSlider;