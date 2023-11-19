import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
    const {id, thumbnail, brand,title } = product;
    return (
        <div>
            <h1>Product Details:{id}</h1>
            <div className='flex'>
            <img src={thumbnail} alt="" />
            <p>{brand}</p>
            <p>{title}</p>

           
            </div>

            <button className='border p-2 rounded bg-orange-900'>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;