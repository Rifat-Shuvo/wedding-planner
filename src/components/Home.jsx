import React from 'react';
import Banner from './Banner';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';


const Home = () => {
    const allCategory = useLoaderData()


    return (
        <div>
            <Banner></Banner>


            <h1 className='m-8 p-8 text-5xl font-bold text-center text-rose-600'>Our Services</h1>

            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allCategory.map(category => <Cards
                        key={category.id}
                        category={category}
                    ></Cards>)
                }
            </div>


            <div className='mb-5 pb-5 bg-rose-100 h-[60vh]'>
                <h1 className='m-8 pt-32 text-5xl font-bold text-center text-rose-600'>Why Choose Us???</h1>
                <ul className='text-xl text-center text-slate-600'>
                    <li> We are experienced event planners who have a proven track record of success.</li>
                    <li> We offer a wide range of services to make the event planning process as stress-free as possible.</li>
                    <li> We have access to a large network of venues and vendors, which allows us to negotiate the best prices for our clients.</li>
                    <li> We are passionate about events and we love helping our clients create unforgettable experiences.</li>
                </ul>
            </div>

            <div className='h-[60vh]'>
                <div className='pt-24'>
                    <h1 className='m-8 p-5 text-5xl font-bold text-center text-rose-600'>TESTIMONIALS !!!</h1>

                    <p className='text-center px-12'>I am so grateful for the services of my wedding event planner, RS EVENT PLANNER. She was with me every step of the way, from helping me choose a venue to coordinating all of the vendors. She was always professional, responsive, and organized, and she made sure that my wedding day was everything I had ever dreamed of. I highly recommend RS EVENT PLANNER to anyone planning a wedding!</p>

                    <h3 className='text-3xl font-bold text-center mb-5'>-Rosalin</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;