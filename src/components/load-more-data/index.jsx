import { useEffect, useState } from 'react';
import './styles.css';


function LoadMoreData(){

    const [count, setCount] = useState(0);
    const [prods, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    console.log(prods);

    async function fetchProducts(){
        try {
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=50&skip=${count === 0 ? 0 : count * 50}`);
            const data = await response.json();

             console.log(data);

            if(data && data.products && data.products.length){
                setLoading(false);
                setProducts((prevData) => [...prevData, ...data.products]);
            }
            
        } catch (error) {
            setLoading(false);
            setErrorMsg(error);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(() => {
        if(prods.length === 194) setDisableButton(true);
    }, [prods]); //Want to execute this Cb whenever prods changes.


    if(loading){
        return <div>Please Wait! We are fetching Data</div>
    }
    if(errorMsg){
        return <div>An error occured! {errorMsg}</div>
    }

    return(
        <div className='wrapper'>


            <div className="product-container">
                {
                    prods.map((products, index) => 
                        <div className='product' key={products.id}>
                            <div className="product-image">
                                <img 
                                    src={products.thumbnail} 
                                    alt={products.title} 
                                />
                            </div>
                            <div className="product-title">
                                <p>{products.title}</p>
                            </div>
                        </div>
                    )
                }
            </div>


            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount((prevCount) => prevCount + 1)}>Load More Data</button>
            </div>


            {
                disableButton ? <p>You have reached 194 products</p> : null
            }


        </div>
    )

}

export default LoadMoreData;