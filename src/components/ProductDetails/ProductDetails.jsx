import React, { useEffect, useState } from 'react'
import { getProductId } from '../../ApiService/Api';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

function ProductDetails() {

    const {id} = useParams();

    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        async function fetchProductDetails(){
            const data = await getProductId(id);
            setProductDetails(data);
        }
        fetchProductDetails();
    },[]);

    function handleBuyNow() {
        window.confirm('The product is out of stock')
    }

  return (
    <div className='product-details-container'>
        <img src={productDetails.image} alt="image" className='product-img' />
        <div className='product-details'>
            <h2 className='product-title'>
                {productDetails.title}
            </h2>
            <p className='product-description'>
                {productDetails.description}
            </p>
            <p className='product-price'>
                ${productDetails.price}
            </p>
            <button onClick={handleBuyNow} className='buy-no-btn'>Buy Now</button>
            <Link to='/'>
            <button className='go-back-btn'>Go Back</button>
            </Link>
        </div>
    </div>
  )
}

export default ProductDetails
