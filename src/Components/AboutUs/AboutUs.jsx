import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='bg-[#9538E2] h-[400px] rounded-b-xl flex flex-col justify-center '>
                <div className=' space-y-6 text-center text-white w-10/12 mx-auto'>
                    <h1 className='text-3xl font-bold'>About us</h1>
                    <p>At Gadget Heaven, we are committed to providing top-quality gadgets with exceptional customer service, ensuring your tech needs are met with reliability and care.</p>
                </div>
                <div className='absolute  rounded-xl top-96 border-white space-y-6 text-center   mx-auto'>
              <div className=' w-10/12 mx-auto '>
              <div className="collapse collapse-plus bg-base-200 border-2 border-[#9538E2]">
                        <input type="radio" name="my-accordion-3" defaultChecked />
                        <div className="collapse-title text-xl font-medium">What types of gadgets are available on the Gadget Heaven website?</div>
                        <div className="collapse-content">
                            <p>Gadget Heaven offers a wide range of gadgets, including smartphones, laptops, tablets, wearables, and various accessories like chargers, power banks, earphones, headphones, and cases. The site caters to different tech needs, offering both budget-friendly and premium products.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200  border-2 border-[#9538E2]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Can I filter gadgets by category on Gadget Heaven?</div>
                        <div className="collapse-content">
                            <p>Yes, the Gadget Heaven website allows users to filter products by category, such as "Phones," "Laptops," "Accessories," and other subcategories. You can also apply additional filters like brand, price range, and features to find products that meet your specific needs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200  border-2 border-[#9538E2]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">How do I add a product to my shopping cart on Gadget Heaven?</div>
                        <div className="collapse-content">
                            <p>To add a product to your shopping cart, simply visit the product page and click on the "Add to Cart" button. You can continue shopping or proceed to checkout when you're ready. The shopping cart icon in the header will display the number of items you've added.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200  border-2 border-[#9538E2]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Does Gadget Heaven offer any warranty on the products sold?</div>
                        <div className="collapse-content">
                            <p>Yes, Gadget Heaven provides warranties on most of the products sold on their site, including phones, laptops, and accessories. Warranty details vary by product, so be sure to check the product page for specific terms and conditions regarding warranty coverage.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200  border-2 border-[#9538E2]">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">Can I track my order after purchasing from Gadget Heaven?</div>
                        <div className="collapse-content">
                            <p>Yes, after completing a purchase, you will receive an order confirmation email that includes a tracking number. You can use this number to track the status of your shipment through the carrier's website. Additionally, you can log in to your account on Gadget Heaven to check the status of your order.</p>
                        </div>
                    </div>
              </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;