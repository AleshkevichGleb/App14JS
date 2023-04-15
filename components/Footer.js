class Footer  {
    create() {
        let footer = document.createElement('footer');
        footer.className = 'footer';
        this.element = footer;
        this.element.innerHTML = 'Footer'
        return this.element;
    }

    init() {
        return this.create();
    }
}

export let footer = new Footer().init();