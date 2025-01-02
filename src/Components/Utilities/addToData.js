import { toast } from "react-toastify";



const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
};

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists');

    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        toast('Cart added')
    }

};

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
};


const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        console.log(id, 'already exists');

    }
    else {
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
        toast('Wish-list added')
    }

};

const removeFromStoredCartList = (id) => {

    const storedList = getStoredCartList().filter(gadgetId => gadgetId !== id);
    localStorage.setItem('cart-list', JSON.stringify(storedList));
}
const removeFromStoredWishList = (id) => {

    const storedList = getStoredWishList().filter(gadgetId => gadgetId !== id);
    localStorage.setItem('cart-list', JSON.stringify(storedList));
}


export { addToStoredCartList, getStoredCartList, addToStoredWishList, getStoredWishList, removeFromStoredCartList, removeFromStoredWishList }



