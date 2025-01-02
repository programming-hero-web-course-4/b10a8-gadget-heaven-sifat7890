import React from 'react';

const Footer = () => {
    return (
        <div className='w-10/12 mx-auto mt-96  mb-12 flex flex-col gap-y-6'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold'>Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className='flex justify-evenly'>
                <div>
                    <p className='text-xl font-bold'>Services</p>
                    <ul>
                        <li>Product Support</li>
                        <li>Order Tracking</li>
                        <li>Shipping & Delivery</li>
                        <li>Returns</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'>Company</p>
                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-bold'>Legal</p>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;