import { productsTitle } from "./ProductsTitle.js";
import { productsItem } from "./ProducstItem.js";

class Main  {
    create() {
        let main = document.createElement('main');
        main.className = 'main';
        main.append(productsTitle, productsItem)
        this.element = main;
        return this.element;
    }

    init() {
        return this.create();
    }
}

export let main = new Main().init();