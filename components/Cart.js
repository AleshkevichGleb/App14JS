const plusCountProduct = (cart, quanity) => event => {
    const {target} = event;
    const id = target.closest('.cart__item').querySelector('.cart__remove').getAttribute('id');
    
    let date = new Date();
    date.setDate(date.getDate() + 10);

    const product = JSON.parse(localStorage.getItem('shopData')).filter(prod => prod.id === +id)[0];

    cart.push(product);

    document.cookie = `data=${JSON.stringify(cart)}; path='/'; expires=${date}`;

    let countProducts = document.querySelector('.cartCount');
    countProducts.innerHTML = cart.length;
   
    let cartFullPrice = document.querySelector('.cartPrice');

    let fullPrice = 0;
    cart.forEach(product => {
            fullPrice += +product.price;
    });

    cartFullPrice.innerHTML  = '$' + fullPrice.toFixed(2);
    // quanity.value = cart.filter(prod => prod.id === +id).length;
    quanity.value++;
}


const minusCountProduct = (cart, quanity) => event => {
    if(quanity.value > 1) {
        const {target} = event;
        const id = target.closest('.cart__item').querySelector('.cart__remove').getAttribute('id');
    
        let date = new Date();
        date.setDate(date.getDate() + 10);
    
        const product = JSON.parse(localStorage.getItem('shopData')).filter(prod => prod.id === +id)[0];
    
        cart.pop(product);
    
        document.cookie = `data=${JSON.stringify(cart)}; path='/'; expires=${date}`;
    
        let countProducts = document.querySelector('.cartCount');
        countProducts.innerHTML = cart.length;
       
        let cartFullPrice = document.querySelector('.cartPrice');
    
        let fullPrice = 0;
        cart.forEach(product => {
                fullPrice += +product.price;
        });
    
        cartFullPrice.innerHTML  = '$' + fullPrice.toFixed(2);
        // quanity.value = cart.filter(prod => prod.id === +id).length;
        quanity.value--;
    }
}

export const Cart = (productsCookie) => {
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
    
    let cart = JSON.parse(productsCookie);
    const productsContainer = document.createElement('div');
    productsContainer.className = 'cart__products';

    let buttonsRemove = [];
    if(cart){
        let items = [];
        Start:
        for(let element of cart){
            const item = document.createElement('div');
            item.className = 'cart__item';
    
            const productDelete = document.createElement('button');
            productDelete.innerHTML = '&#10008;';
            productDelete.className = 'cart__remove';
            productDelete.setAttribute('id', element.id);
            buttonsRemove.push(productDelete);
    
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
    
            quanity.value = getCountOfOneProduct(cart, element.id);
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

            items = [...items, item];
            for(let i = 0; i < items.length; i++) {
                for(let j = i + 1; j < items.length; j++) {
                    if(items[i].querySelector('.cart__remove').id === items[j].querySelector('.cart__remove').id) {
                        // continue Start;
                        console.log(items[i], items[j]);
                    }
                }
            }
            
            productsContainer.append(item);
    
            productDelete.addEventListener('click', (event) => {
                const {target} = event;
    
                const parent = target.closest('.cart__item');
                cart = cart.filter(product => product.id !== +target.id );
                    
                let date = new Date();
                date.setDate(date.getDate() + 10);
    
                let countProducts = document.querySelector('.cartCount');
                let cartPrice = document.querySelector('.cartPrice');
    
                let fullprice = 0;
                cart.forEach(elem => fullprice += elem.price)
                document.cookie = `data=${JSON.stringify(cart)}; path='/'; expires=${date}`;
    
                countProducts.innerHTML = cart.length;
                cartPrice.innerHTML = '$'+fullprice;
                parent.remove();

                if(cart.length === 0) {
                    date.setDate(date.getDate() - 30);
                    document.cookie = `data=${JSON.stringify(cart)}; path='/'; expires=${date}`;
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

function getCountOfOneProduct(cart, id) {
    let count = 0;

    cart.forEach( product => {
        if(product.id == id){
            count++
        } 
    })

    return count;
}
