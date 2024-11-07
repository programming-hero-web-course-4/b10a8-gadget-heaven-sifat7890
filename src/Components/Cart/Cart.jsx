import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ gadget }) => {
    const { product_title, product_id, price, product_image } = gadget;
    console.log(gadget);

    return (
        <div>
            <div className="card bg-base-100  shadow-2xl ">
                <figure className=' py-8 rounded-2xl'>
                    <img
                        src={product_image}
                        className='h-[166px]'
                        alt={product_title} />
                </figure>
                <div className="card-body">

                    <h2 className="card-title">
                        {product_title}

                    </h2>
                    <p>Price: {price}</p>
                    <Link to={`/cart/${product_id}`}><button className='btn  border-2 border-[#9538E2] hover:bg-[#9538E2]  hover:text-white font-bold rounded-full w-3/6'>View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Cart;