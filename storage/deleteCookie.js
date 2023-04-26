import { getCookie } from "./getCookie.js"
import { setCookie } from "./setCookie.js";

export const deleteCookie = id => {
    const cookieLength = getCookie('cartItems').filter(item => item.id !== +id);
    setCookie('cartItems', cookieLength);
}

export const deleteFullCookie = name => {
    let date = new Date();
    date.setDate(date.getDate() - 20);

    document.cookie = `${name}= ; path='/'; expires=${date}`;
}