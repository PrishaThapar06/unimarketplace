import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const TopProducts = ({ title, products }) => {
    return (
        <>
            <div className='topSelling_box'>
                <h3>{title}</h3>
                {products.map((product, index) => (
                    <div key={index} className='items d-flex align-items-center'>
                        <div className='img'>
                            <Link to="">
                                <img src={product.img} className='w-100' alt={product.name} />
                            </Link>
                        </div>
                        <div className='info px-3'>
                            <Link to=""><h4>{product.name}</h4></Link>
                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className='d-flex align-items-center'>
                                <span className='price text-g font-weight-bold'>{product.price}</span>
                                <span className='oldPrice'>{product.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TopProducts;
