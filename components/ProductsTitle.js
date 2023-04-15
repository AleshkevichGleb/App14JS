class ProductsTitle {
    create() {
        let mainTitle = document.createElement('div');
        mainTitle.className = 'main__title';
        mainTitle.innerHTML = 'Our products'
        this.element = mainTitle;
        return this.element;
    }

    init() {
        return this.create();
    }
}

export const productsTitle = new ProductsTitle().init();