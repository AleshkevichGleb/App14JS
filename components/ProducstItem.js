let colors = ["red", "black"];

class ProductsItem {

    getCookie(name) {
            let results = document.cookie.match ( '(^|;) ?' + name + '=([^;]*)(;|$)' );
            return results ? unescape(results[2]) : null;
    }

    calcFullPrice() {
        let cartFullPrice = document.querySelector('.cartPrice');
        let fullPrice = 0;
        this.productData.forEach(product => {
            fullPrice += product.productPrice;
        });
        
        cartFullPrice.innerHTML ='$' + fullPrice.toFixed(2);
    }

    create() {
        let localData = JSON.parse(localStorage.getItem('shopData'));
        
        let productContainer = document.createElement('div');
        productContainer.className = 'product__container'

        for(let product of localData) {
            let productBlock = document.createElement('div');
            productBlock.className = 'product__item';

            let productImage = document.createElement('img');
            productImage.className = 'product__image';
            productImage.setAttribute('src', product.image)

            let productTitle = document.createElement('span');
            productTitle.className = 'product__title';
            productTitle.innerHTML = product.title;

            let productPrice = document.createElement('span');
            productPrice.className = 'product__price';
            productPrice.innerHTML = '$' + product.price;
            let color = Math.floor(Math.random() * colors.length);
            productPrice.style.color = colors[color]

            let productButton = document.createElement('button');
            productButton.className = 'addButton';
            productButton.innerHTML = 'Add to basket';

            let countProducts = document.querySelector('.cartCount');

            this.productData = JSON.parse(this.getCookie('data'))
            if(!this.productData) this.productData = [];
            else {
                countProducts.classList.add('active')
                countProducts.innerHTML = this.productData.length;
                this.calcFullPrice();
            }

            productButton.addEventListener('click', (event) => {
                const {target} = event; 

                let date = new Date();
                date.setDate(date.getDate() + 10)
                
                let productObj = {
                    productImage: product.image,
                    productTitle: product.title,
                    productPrice: product.price,
                    productDescription: product.description
                }

                this.productData.push(productObj);
                document.cookie = `data=${JSON.stringify(this.productData)}; path='/'; expires=${date}`;

                countProducts.innerHTML = this.productData.length;
                
                this.calcFullPrice();

                if(!countProducts.classList.contains('add')) {
                    countProducts.classList.add('active')
                    countProducts.innerHTML = this.productData.length;
                }
            })

            productBlock.append(productImage, productTitle, productPrice, productButton);


            productContainer.append(productBlock);
        }

        return productContainer;
    }

    init() {
        return this.create();
    }
}

export const productsItem = new ProductsItem();