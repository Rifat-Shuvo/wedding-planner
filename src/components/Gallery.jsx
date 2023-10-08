import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Gallery = () => {
    const allPhoto = useLoaderData()

    return (
        <div className='h-[70vh]'>
             <h1 className='m-8 p-8 text-5xl font-bold text-center text-rose-600'>GALLERY</h1>

            <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-4 mx-5 px-8'>
                {
                    allPhoto.map(element=><div key={element.id}><img src={element.photo} alt="" /></div>  )
                }
            </div>
        </div>
    );
};

export default Gallery;