class ProductsItem {
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

            productBlock.append(productImage, productTitle, productPrice);


            productContainer.append(productBlock);
        }

        return productContainer;
    }

    init() {
        return this.create();
    }
}

export const productsItem = new ProductsItem().create();