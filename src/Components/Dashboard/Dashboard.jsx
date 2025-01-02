import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getStoredCartList, getStoredWishList, removeFromStoredCartList, removeFromStoredWishList } from '../Utilities/addToData';
import CartList from '../CartList/CartList';
import WishList from '../WishList/WishList';
import { TbArrowsSort } from "react-icons/tb";


const Dashboard = () => {
    const allGadgets = useLoaderData();
    const [cartLists, setCartLists] = useState([])
    const [wishLists, setWishLists] = useState([])
    const [activeTab, setActiveTab] = useState('cartLists');
    const [totalCost, setTotalCost] = useState(0);
    const [sort, setSort] = useState('');




    useEffect(() => {
        const storedCartList = getStoredCartList();
        console.log(allGadgets, storedCartList);
        const gadgetList = allGadgets.filter(gadget => storedCartList.includes(gadget.product_id));
        setCartLists(gadgetList);

    }, [allGadgets])
    useEffect(() => {
        const storedWishList = getStoredWishList();
        console.log(allGadgets, storedWishList);
        const gadgetWishList = allGadgets.filter(gadget => storedWishList.includes(gadget.product_id));
        setWishLists(gadgetWishList);

    }, [allGadgets])

    useEffect(() => {
        const cost = cartLists.reduce((total, gadget) => total + gadget.price, 0);
        setTotalCost(cost)
    }, [cartLists]);



    const handleTabChange = (tab) => {

        setActiveTab(tab);
    }

    const handleRemoveFromCartList = (id) => {
        removeFromStoredCartList(id);
        setCartLists(prevCartLists => prevCartLists.filter(gadget => gadget.product_id !== id));
    }
    const handleRemoveFromWishList = (id) => {
        removeFromStoredWishList(id);
        setWishLists(prevWishLists => prevWishLists.filter(gadget => gadget.product_id !== id));
    }

    const handleSort = sortType => {
        setSort(sortType);
        const sortedCartList = [...cartLists].sort((a, b) => b.price - a.price);
        setCartLists(sortedCartList);

    }

    const handlePurchase = () => {
        setCartLists([]);
        setTotalCost(0);
        localStorage.setItem('cart-list', JSON.stringify([]));
        showModal()
    };
    const showModal = () => {
        const modal = document.getElementById("my_modal_5");
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div >
            <div className='bg-[#9538E2] h-[400px] rounded-b-xl flex flex-col justify-center '>
                <div className=' space-y-6 text-center text-white w-10/12 mx-auto'>
                    <h1 className='text-4xl font-bold'>Dashboard</h1>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='flex justify-center gap-3'>
                        <button className={`btn ${activeTab === 'cartLists' ? 'btn  bg-white text-black font-bold rounded-full w-32' : 'btn bg-[#9538E2] text-white font-bold rounded-full w-32'}`} onClick={() => handleTabChange('cartLists')}>Cart</button>
                        <button className={`btn ${activeTab === 'wishLists' ? 'btn  bg-white text-black font-bold rounded-full w-32' : 'btn bg-[#9538E2] text-white font-bold rounded-full w-32'}`} onClick={() => handleTabChange('wishLists')}>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='flex w-10/12 mx-auto justify-between items-center  mt-8'>
                <h3 className='text-2xl font-bold'>Cart</h3>
                <div className='flex gap-6 items-center justify-center'>
                    <p>Total cost:${totalCost}</p>
                    <button onClick={() => handleSort()} className='btn border-2 border-[#9538E2] 
                    text-[#9538E2] font-bold rounded-full w-36 flex'>Sort By Price <TbArrowsSort /></button>
                    <button onClick={handlePurchase} className='btn bg-[#9538E2] text-white font-bold rounded-full w-36' disabled={cartLists.length === 0}>Purchase</button>
                </div>

            </div>
            <div>
                {activeTab === 'cartLists' && (
                    <div>

                        {cartLists.map(cartList => <CartList key={cartList.product_id} cartList={cartList} onRemove={handleRemoveFromCartList}></CartList>)}
                    </div>

                )}
                {activeTab === 'wishLists' && (<div>

                    {wishLists.map(wishList => <WishList key={wishList.product_id} wishList={wishList} onRemove={handleRemoveFromWishList}></WishList>)}
                </div>
                )}
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                    <div className="modal-action justify-center">
                        <form method="dialog flex flex-col justify-center items-center align-center ">
                            <div className='text-center flex flex-col justify-center items-center align-center space-y-3'>
                                <img className='w-10' src="https://img.icons8.com/?size=100&id=102561&format=png&color=000000" alt="" />
                                <p className='font-bold text-3xl'>Purchase Successful</p>
                                <p className=' text-lg'>Thanks For Purchasing</p>
                            </div>

                            <Link to="/"><button className="btn w-full text-center mt-3">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;