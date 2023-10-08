import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ category }) => {

    const {photo, title,description,price,id} = category

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-52 w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-rose-600 font-bold text-2xl">{title}</h2>
                    <p className='text-slate-500 font-semibold'>{description.slice(0,110)} <Link to={`/category/${id}`} className='text-rose-600'>Read more...</Link> </p>
                    <div className="card-actions">
                        <p className="p-3 text-center rounded-lg font-bold text-2xl bg-rose-400 text-white w-full">Price : {price} Tk</p>
                        {/* <button className="btn bg-rose-500 text-white w-full"><Link to={`/category/${id}`}>See Details</Link></button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;