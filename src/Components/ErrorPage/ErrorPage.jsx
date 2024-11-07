import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error =useRouteError();
    return (
        <div className='text-center flex  justify-center items-center h-[550px] '>
             <div className=' w-full space-y-5'>
             <h1 className='text-9xl'>404</h1>
            {/* <p className='text-2xl'>{error.statusText || error.massage}</p> */}
            {
                error.status === 404 && 
                <div className='space-y-2'>
                    <h3 className='text-2xl'>Page not found</h3>
                    <p>go back to home page</p>
                    <Link to="/"><button className='btn bg-[#9538E2] text-white'>Home</button></Link>
                </div> 
            }
             </div>
        </div>
    );
};

export default ErrorPage;