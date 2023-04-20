import { Cart } from "../components/Cart.js";
import { Products } from "../components/Products.js";
import { ErrorComponent } from "../components/ErrorComponent.js";
import { main as Main } from "../components/Main.js";


const routes = () => [
    {path:'/', component: Main},
    {path:'/page', component: Products},
    {path: '/cart', component: Cart}
]

export const router = () => {
    const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';
    const path = parseLocation().match(/\/([^/]*)/i)[0];

    const id = parseLocation().split('/')[2];

    const products = JSON.parse(localStorage.getItem('shopData'));
    const product = products.filter(prod => prod.id == id)[0];

    const findComponent = (path, routes) => routes.find(rout => rout.path === path) || undefined;

    const {component = ErrorComponent} = findComponent(path, routes()) || {};

    document.querySelector('.main').innerHTML = '';
    document.querySelector('.main').append(component(product));
}

// window.addEventListener('load', router);
window.addEventListener('hashchange', router);