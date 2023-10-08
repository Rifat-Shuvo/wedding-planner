import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Card = () => {
    const[detailCard, setDetailCard] = useState({})
    const{id} = useParams()
    const all = useLoaderData()
   useEffect(()=>{
    const find = all.find(card=>card.id == id)
    setDetailCard(find)
   },[id,all])
 const {title,photo,description,price} =detailCard
    return (
        <div className='px-5 bg-rose-300 h-[100vh]'>
          <div className='my-6 py-5 relative'>
                <img src={photo} alt="" className='mx-auto w-fit h-[40vh] rounded-none' />
            
            </div>
            <div>
                <h1 className='text-5xl font-bold'>{title}</h1>
                <p className='my-5'>{description}</p>
                <h3 className='text-3xl text-red-600 text-center font-medium p-5'>Total Cost of this events : {price} Tk </h3>
                <p className='text-green-700 text-center font-bold'>For Discount, Use Code: Discount200</p>
            </div>
        </div>
    );
};

export default Card;