import { getCookie } from "../storage/getCookie.js"

export const setCartTotalPrice = () => {
    const cartItems = JSON.parse(getCookie('cartItems'));
    const totalElement = document.querySelector('.cartPrice');
    const total = cartItems ? cartItems.reduce((acc, elem) => acc + elem.price * elem.quanity, 0): 0;
    totalElement.innerHTML = '$' + total.toFixed(2);
}