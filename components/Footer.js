import { footerElements as FooterElements } from "./FooterElements.js";

class Footer  {
    create() {
        let footer = document.createElement('footer');
        footer.className = 'footer';
        this.element = footer;
        this.element.append(FooterElements)
        return this.element;
    }

    init() {
        return this.create();
    }
}

export let footer = new Footer().init();