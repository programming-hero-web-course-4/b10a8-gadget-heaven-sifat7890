import React from 'react';
import { MdOutlineCancel } from "react-icons/md";


const CartList = ({ cartList,onRemove }) => {
    const { product_id, product_title, price, product_image, description, specification, availability, rating } = cartList;
    return (
        <div>
            <div className=" rounded-xl border space-y-10 w-10/12 mx-auto mb-5">

                <div className="flex items-center justify-between  ">
                    <div className="flex items-center justify-center gap-6 ">

                        <img className="h-36 w-36 rounded-xl p-2" src={ product_image}></img>

                        <div>
                            <p className="font-bold text-xl ">{product_title}</p>
                            <p className="font-semibold text-lg ">{description}</p>
                            <p>Price:${price}</p>
                        </div>
                    </div>

                    <button onClick={()=>onRemove(product_id)} className="flex items-center justify-center p-4 h-11">
                    <MdOutlineCancel />
                    </button>

                </div>




            </div>
        </div>
    );
};

export default CartList;