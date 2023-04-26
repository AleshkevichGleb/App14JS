import { setCartTotalQuanity } from "../functions/setCartTotalQuanity.js";
import { getCookie } from "../storage/getCookie.js";
import { setCookie } from "../storage/setCookie.js";

let colors = ["red", "black"];

class ProductsItem {

    calcFullPrice() {
        let cartFullPrice = document.querySelector('.cartPrice');
        let fullPrice = 0;
        this.productData.forEach(product => {
            fullPrice += product.price;
        });
        
        cartFullPrice.innerHTML  = '$' + fullPrice.toFixed(2);
    }

    create() {
        let localData = JSON.parse(localStorage.getItem('shopData'));
        
        let productContainer = document.createElement('div');
        productContainer.className = 'product__container'

        for(let product of localData) {
            let productBlock = document.createElement('div');
            productBlock.className = 'product__item';

            let productLinkImage = document.createElement('a');
            productLinkImage.setAttribute('href', `#/page/${product.id}`);

            let productImage = document.createElement('img');
            productImage.className = 'product__image';
            productImage.setAttribute('src', product.image)

            productLinkImage.append(productImage);


            let productTitle = document.createElement('span');
            productTitle.className = 'product__title';
            productTitle.innerHTML = product.title;

            let productPrice = document.createElement('span');
            productPrice.className = 'product__price';
            productPrice.innerHTML = '$' + product.price;

            let color = Math.floor(Math.random() * colors.length);
            productPrice.style.color = colors[color]

            let productButton = document.createElement('button');
            productButton.setAttribute('id', product.id);
            productButton.className = 'addButton';
            productButton.innerHTML = 'Add to basket';

            let countProducts = document.querySelector('.cartCount');

            this.productData = JSON.parse(getCookie('cartItems'))
            if(!this.productData) this.productData = [];
            else {
                countProducts.classList.add('active')
                countProducts.innerHTML = this.productData.length;
                this.calcFullPrice();
            }

            productButton.addEventListener('click', (event) => {
                const {target} = event; 
            
                let productArr = JSON.parse(localStorage.getItem('shopData')).filter(elem => elem.id == event.target.id);

                let productObj = productArr[0];

                if(this.productData.length) {
                    this.productData.forEach(elem => {
                        if(elem.id === productObj.id) {
                            elem.quanity++;
                        } else {
                            productObj.quanity = 1;
                            this.productData.push(productObj);
                        }
                        console.log(typeof elem.id);
                    })
                } else {
                    productObj.quanity = 1;
                    this.productData.push(productObj);
                }

                setCookie('cartItems', this.productData);

                countProducts.innerHTML = setCartTotalQuanity();
                
                this.calcFullPrice();

                if(!countProducts.classList.contains('add')) {
                    countProducts.classList.add('active')
                    countProducts.innerHTML = this.productData.length;
                }
            })

            productBlock.append(productLinkImage, productTitle, productPrice, productButton);


            productContainer.append(productBlock);
        }

        return productContainer;
    }

    init() {
        return this.create();
    }
}

export const productsItem = new ProductsItem();