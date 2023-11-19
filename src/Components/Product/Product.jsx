import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Product = () => {
    const product = useLoaderData();
    // console.log(product.carts)
    
    // console.log(product.products.map)
    return (
        <div className='flex flex-wrap gap-5'>
           
           {
               product?.products?.map((eachElement, index)=><Card key={index} eachElement={eachElement} ></Card>)
           }
        </div>
    );
};

export default Product;