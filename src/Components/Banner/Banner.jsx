import React from 'react';
import bannerImage from '../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className='bg-[#9538E2] h-[500px] rounded-b-xl'>
            <div className="hero   text-white">
                <div className="hero-content flex-col relative ">
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                            the coolest accessories, we have it all!
                        </p>
                        <button className="btn btn-white text-[#9538E2] font-bold rounded-full">Shop Now</button>
                    </div>
                    <div className=' absolute border-2 p-3 rounded-xl top-80 border-white'>

                        <img
                            src={bannerImage}
                            className="rounded-lg shadow-2xl  w-[1000px] h-96" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;