import { useEffect, useState } from 'react';
import './styles.css';

//document.documentElement.clientheight !== document.body.clientHeight
//document.documentElement.scrollTop !== document.body.scrollTop


function ScrollIndicator({url}){

    const [percentage, setPercentage] = useState(0);

    console.log(percentage);

    function handleScroll(){

        let howmuchScrolled = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let percentageScrolled = `${Math.round((howmuchScrolled/height) * 100)}%`;

        setPercentage(percentageScrolled);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {window.removeEventListener('scroll',()=>{})}
    })


    return(
        <div className="container">

            <div className="display">
                <div className='display-percentage'>
                    {percentage}
                </div>
                <div className="display-progress-bar" style={{
                    width: `${percentage}`,
                    height: '50px',
                    backgroundColor: 'yellow'
                }}/>
            </div>



        </div>
    )
}

export default ScrollIndicator;