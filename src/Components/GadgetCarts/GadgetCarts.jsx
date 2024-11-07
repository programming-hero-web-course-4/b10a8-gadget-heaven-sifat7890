import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';

const GadgetCarts = () => {
    const carts = useLoaderData()
    const { category } = useParams()
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
       if(category){
        const gadgetFilterByCategory = [...carts].filter(
            gadget => gadget.category === category
        )

        setGadgets(gadgetFilterByCategory)
       }
       else{
        setGadgets(carts)
       }

    }, [category,carts]) 

console.log(gadgets);

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                gadgets.map(gadget =>
                    <Cart key={gadget.product_id} gadget={gadget}></Cart>
                )
            }
        </div>
    );
};

export default GadgetCarts;