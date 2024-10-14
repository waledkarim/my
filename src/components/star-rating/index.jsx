import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import './styles.css';

function StarRating({noOfStarts = 5}){

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState();

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    console.log(rating);
    console.log(hover);


    return(
        <div className="star-rating">
            {[...Array(noOfStarts)].map((_, index)=> {

                 index += 1;

                 return <FaStar 
                 className={index <= (hover || rating) ? "active" : "inactive"}
                 key={index}
                 onClick={() => handleClick(index)}
                 onMouseMove={() => handleMouseEnter(index)}
                 size={50}
                />

            })}
        </div>
    )
}

export default StarRating;