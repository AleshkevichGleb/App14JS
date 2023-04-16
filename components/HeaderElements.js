import { logo as Logo } from "./Logo.js";

class HeaderElements {

    create() {
        let headerContainer = document.createElement('div');
        headerContainer.className = "header__container"
        
        let headerBlock = document.createElement('div');
        headerBlock.className = 'header__block'

        let nav = document.createElement('nav');
        nav.className = 'nav';

        let homeLink = document.createElement('a');
        homeLink.classList.add('nav__link', 'nav__home');
        homeLink.innerHTML = 'Home';
        homeLink.setAttribute('href', '/');

        let shopLink = document.createElement('a');
        shopLink.classList.add('nav__link', 'nav__shop');
        shopLink.innerHTML = 'Shop';
        shopLink.setAttribute('href', '/');

        let contactLink = document.createElement('a');
        contactLink.setAttribute('href', '/');
        contactLink.classList.add('nav__link', 'nav__contact');
        contactLink.innerHTML = 'Contact'

        nav.append(homeLink, shopLink, contactLink);
        headerBlock.append(Logo.init(), nav);

        let cartBlock = document.createElement('div');
        cartBlock.className = 'header__cart';

        let cartImage = document.createElement('img');
        cartImage.setAttribute('src', '../images/cart.png');
        cartImage.className = 'cartImage';

        let cartCount = document.createElement('span');
        cartCount.className = 'cartCount';

        let cartPrice = document.createElement('span');
        cartPrice.className = 'cartPrice';

        cartBlock.append(cartImage, cartCount, cartPrice)


        headerContainer.append(headerBlock, cartBlock);

        return headerContainer;
    }

    init() {
        return this.create();
    }
}

export let headerElements = new HeaderElements().init();