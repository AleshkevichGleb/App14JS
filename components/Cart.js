import { productsItem } from "../elements/ProducstItem.js";
import { setCartTotalPrice } from "../functions/setCartTotalPrice.js";
import { setCartTotalQuanity } from "../functions/setCartTotalQuanity.js";
import { deleteFullCookie } from "../storage/deleteCookie.js";
import { getCookie } from "../storage/getCookie.js";
import { setCookie } from "../storage/setCookie.js";

const plusCountProduct = (cart, quanity) => event => {
    const {target} = event;
    const id = target.closest('.cart__item').querySelector('.cart__remove').getAttribute('id');
    
    cart.filter(elem => {
        if(elem.id === +id) elem.quanity++;
    }) 

    setCookie('cartItems', cart);

    setCartTotalPrice();
    setCartTotalQuanity();

    quanity.value++;
}


const minusCountProduct = (cart, quanity) => event => {
    if(quanity.value > 1) {
        const {target} = event;
        const id = target.closest('.cart__item').querySelector('.cart__remove').getAttribute('id');
    
        cart.filter(elem => {
            if(elem.id === +id) elem.quanity--;
        }) 
    
        setCookie('cartItems', cart);
    
        setCartTotalPrice();
        setCartTotalQuanity();
    
        quanity.value--;
    }
}

export const Cart = () => {
    const container = document.createElement('div');
    container.className = 'cart__container';

    const title = document.createElement('span');
    title.innerHTML = 'Cart';
    title.className = 'title'

    const table = document.createElement('div');
    
    const titles = document.createElement('div');
    titles.className = 'cart__titles';

    const titlesName = document.createElement('span');
    titlesName.innerHTML = 'Product';
    titlesName.style.paddingLeft = '100px';

    const titlesPrice = document.createElement('span');
    titlesPrice.innerHTML = 'Price';
    titlesPrice.style.marginLeft = 'auto';

    const titlesQuanity = document.createElement('span');
    titlesQuanity.innerHTML = 'Quanity';
    titlesQuanity.style.margin = '0px 20px 0px 40px'

    titles.append(titlesName, titlesPrice, titlesQuanity);
    
    let cart = JSON.parse(getCookie('cartItems'));
    
    const productsContainer = document.createElement('div');
    productsContainer.className = 'cart__products';

    if(cart){

        for(let element of cart){
            const item = document.createElement('div');
            item.className = 'cart__item';
    
            const productDelete = document.createElement('button');
            productDelete.innerHTML = '&#10008;';
            productDelete.className = 'cart__remove';
            productDelete.setAttribute('id', element.id);
    
            const cartImage = document.createElement('img');
            cartImage.setAttribute('src', element.image);
            cartImage.className = 'cart__image';
    
            const cartTitle = document.createElement('h4');
            cartTitle.innerHTML = element.title;
            cartTitle.className = 'cart__title';
    
            const cartPrice = document.createElement('span');
            cartPrice.innerHTML ='$'+element.price;
            cartPrice.className = 'cart__price';
    
            const cartQuanity = document.createElement('div');
            cartQuanity.className = 'cart__quanity';
            
            const quanity = document.createElement('input');
            quanity.setAttribute('type', 'number');
            quanity.value = element.quanity;
            quanity.disabled = true;
            quanity.className = 'cart__quanityInput';
    
            const increaseQuanity = document.createElement('button');
            increaseQuanity.innerHTML = '+';
            increaseQuanity.classList.add('button', 'buttonIncrease');
            increaseQuanity.addEventListener('click', plusCountProduct(cart, quanity));
    
            const decreaseQuanity = document.createElement('button');
            decreaseQuanity.innerHTML = '-';
            decreaseQuanity.classList.add('button', 'buttonDecrease')
            decreaseQuanity.addEventListener('click',  minusCountProduct(cart, quanity))
    
            cartQuanity.append(quanity, increaseQuanity, decreaseQuanity);
    
            item.append(productDelete, cartImage, cartTitle, cartPrice, cartQuanity);
            
            productsContainer.append(item);

            productDelete.addEventListener('click', (event) => {
                const {target} = event;
                const parent = target.closest('.cart__item');
                cart = cart.filter(product => product.id !== +target.id );
    
                let countProducts = document.querySelector('.cartCount');
                let cartPrice = document.querySelector('.cartPrice');
    
                let fullprice = 0;
                cart.forEach(elem => fullprice += elem.price)
                setCookie('cartItems', cart);
    
                setCartTotalQuanity();
                setCartTotalPrice();
 
                parent.remove();

                if(cart.length === 0) {
                    deleteFullCookie('cartItems')
                    countProducts.classList.remove('active')
                    countProducts.innerHTML = '';
                    cartPrice.innerHTML = '';
                }
    
                chechCartEmpty(cart, container, title, table);
            })
    
            
        }; 
    }
    

    table.append(titles, productsContainer);
    
    chechCartEmpty(cart, container, title, table);
    return container;
};

function chechCartEmpty(cart, container, title, table) {
    if(!cart || cart.length === 0){
        let emptyContainer = document.createElement('div');
        emptyContainer.className = 'emptyBlock';

        let emptyImage = document.createElement('img');
        emptyImage.setAttribute('src', '../images/emptyCart.png');

        let emptyText = document.createElement('span');
        emptyText.innerHTML = 'Your cart is empty';

        emptyContainer.append(emptyImage, emptyText);
        container.append(title, emptyContainer);
        table.remove();
    }
    else {
        container.append(title, table);
    }
}