export async function getData() {
    if(!localStorage.getItem('shopData')) {
        let responce = await fetch('https://fakestoreapi.com/products');
        let result = await responce.json();
        window.localStorage.setItem('shopData', JSON.stringify(result));
    };
}