import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    
    return (
        <div>
            <Banner></Banner>
            <div className='mt-80 w-10/12 mx-auto'>
                <h1 className='text-center text-4xl font-bold'>Explore Cutting-Edge Gadgets</h1>
               <div className='flex justify-between'>
               <div >
               <Categories categories={categories} ></Categories>
               </div>
               <div>
               <Outlet></Outlet>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Home;