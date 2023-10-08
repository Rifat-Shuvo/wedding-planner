import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="h-[80vh] text-center grid bg-cover bg-[url('/cover.jpg')]">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-20 w-full h-full"></div>
                <div className="col-start-1 row-start-1 mx-auto my-auto">
                    <h1 className='text-7xl font-bold mb-7 text-rose-300'>RS EVENT PLANNER</h1>
                    <p className='text-rose-200 font-bold
                 text-3xl mb-5 p-5'>We Are the Best Event Planner with Multi-levels of Events. We have more than 10 years of experienced. We have more than 200 happy clients.</p>
                    <button className='btn font-bold bg-rose-500 text-white border-none'><Link to="/contact">Contact now</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;