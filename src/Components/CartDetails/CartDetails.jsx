import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { addToStoredCartList, addToStoredWishList } from '../Utilities/addToData';

const CartDetails = () => {
    const cartDetails = useLoaderData();
    const { productId } = useParams();


    const cartDetail = cartDetails.find(cartDetail => cartDetail.product_id === productId)

    const { product_id, product_title, price, product_image, description, specification, availability, rating } = cartDetail;

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const handleAddToCart = (id) => {

        addToStoredCartList(id);
    }
    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
    }




    return (
        <div>
            <div className='bg-[#9538E2] h-[400px] rounded-b-xl'>
                <div className="hero text-white">
                    <div>
                        <div className='text-center'>
                            <h1 className="text-5xl font-bold">Product Details</h1>
                            <p className="py-6">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>

                        </div>
                        <div className=' absolute  rounded-xl top-80 border-white'>
                            <div className='rounded-xl shadow-2xl  w-[1000px] h-[525px] bg-white flex  '>
                                <div className='w-[50%] '>
                                    <img className=' h-full rounded-xl' src={product_image} alt="" />
                                </div>
                                <div className='text-black w-[50%] space-y-3 pt-8 '>
                                    <h2 className='text-3xl'>{product_title}</h2>
                                    <h3>Price: ${price}</h3>
                                    <p className='border-2 w-20 border-green-500 rounded-full text-center bg-green-200'>
                                        {availability ? 'In Stock' : 'Not available'}
                                    </p>
                                    <p>{description}</p>
                                    <p className='font-bold '>Specification:
                                        {
                                            specification.map((specs, index) => <ul key={index}><li className='font-normal'>{specs}</li></ul>)
                                        }
                                    </p>
                                    <p className='font-bold flex items-center'>
                                        Rating <span className='text-yellow-400'><FaStar /></span>

                                    </p>
                                    <span className='flex items-center gap-2'>
                                        <ReactStars
                                            count={5}
                                            onChange={ratingChanged}
                                            size={24}
                                            isHalf={true}
                                            emptyIcon={<i className="far fa-star"></i>}
                                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                                            fullIcon={<i className="fa fa-star"></i>}
                                            activeColor="#ffd700"
                                        />
                                        {rating}
                                    </span>

                                    <div className='flex items-center gap-2'>
                                        <button onClick={() => handleAddToCart(product_id)} className='btn btn-white bg-[#9538E2] text-white font-bold rounded-full'>Add To Card <span ><IoCartOutline />
                                        </span></button>
                                        <button onClick={() => handleAddToWishList(product_id)} className='bg-gray-300 rounded-full p-2'> <MdFavoriteBorder /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>


    );
};

export default CartDetails;

