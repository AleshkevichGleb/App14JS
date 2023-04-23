import { utilies as Utilies } from "./Utilies.js";
import { header as Header} from "./Header.js";
import { main as Main } from "./Main.js";
import { footer as Footer } from "./Footer.js";
import { productsItem } from "../elements/ProducstItem.js";
import { getData } from "../request/getData.js";
import { routerEvt } from "../route/router.js";


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


    render() {
        document.body.prepend(this.element);
    }

    async init() {
        await getData();
        Utilies;
        this.create();
        this.render();
        routerEvt();
        document.querySelector('.main').append(productsItem.init());
    }
}