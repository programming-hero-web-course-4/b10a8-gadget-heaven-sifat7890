import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Categories = ({ categories }) => {
    const { category } = useParams();


    return (
        <div className='flex flex-col space-y-3 bg-gray-100  p-3 rounded-xl'>
            <Link to="/">
                <button className={`${!category ? 'btn bg-[#9538E2] text-white font-bold rounded-full w-full' : 'btn bg-gray-300 text-white font-bold rounded-full w-full'}`}>All category</button>
            </Link>


            {
                categories.map(cat => (<Link key={cat.category} to={`/category/${cat.category}`}>
                    <button className=
                        {`${category === cat.category ? 'btn bg-[#9538E2] text-white font-bold rounded-full w-full' : 'btn bg-gray-300 text-white font-bold rounded-full w-full'}`}>
                        {cat.category}
                    </button></Link>))

            }
        </div>
    );
};

export default Categories;


