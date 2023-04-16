import { utilies as Utilies } from "./Utilies.js";
import { header as Header} from "./Header.js";
import { main as Main } from "./Main.js";
import { footer as Footer } from "./Footer.js";
import { productsItem } from "./ProducstItem.js";


export class App {
    constructor() {
        this.init();
    }

    create() {
        const app = document.createElement('div');
        app.className = 'app';
        this.element = app;
        this.element.append(Header, Main, Footer)
    }

    async getData() {
        if(localStorage.getItem('shopData') && localStorage.getItem('shopData') > 0) return;
        else {
            let responce = await fetch('https://fakestoreapi.com/products');
            let result = await responce.json();
            window.localStorage.setItem('shopData', JSON.stringify(result));
        }
    }

    render() {
        document.body.prepend(this.element);
    }

    async init() {
        await this.getData();
        Utilies;
        this.create();
        this.render();

        document.querySelector('.main').append(productsItem.init());
    }
}