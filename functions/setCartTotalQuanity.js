import { getCookie } from "../storage/getCookie.js"

export const setCartTotalQuanity = () => {
    const cartItems = JSON.parse(getCookie('cartItems'));
    const quanityElement = document.querySelector('.cartCount');
    const total = cartItems ? cartItems.reduce((acc, elem) => acc + elem.quanity, 0): 0;
    quanityElement.innerHTML = total;
}