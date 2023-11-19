/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({eachElement}) => {
    const {thumbnail, title,id,price} = eachElement;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img 
            className="h-[200px]"
            src={thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          <div className="card-actions justify-end">
           <Link to={`/Product/${id}`}> <button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
