import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const allBlog = useLoaderData()
    return (

        <div>
            <h1 className='m-8 p-8 text-5xl font-bold text-center text-rose-600'>BLOGS</h1>

            <div className='grid gap-3'>
                {
                    allBlog.map(blog => <div key={blog.id}>
                        <div className='mx-5 px-8'>
                        <div className='my-6 py-5 relative'>
                            <img src={blog.photo} alt="" className='mx-auto w-fit h-[40vh] rounded-none' />

                        </div>
                        <div>
                            <h1 className='text-5xl font-bold'>{blog.title}</h1>
                            <p className='my-5'>{blog.description}</p>

                        </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Blog;