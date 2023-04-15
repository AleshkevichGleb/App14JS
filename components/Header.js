class Header {
    create() {
        let header = document.createElement('header');
        header.className = 'header';
        this.element = header;
        this.element.innerHTML = 'sdfsdfsdf';
        return this.element;
    }

    init() {
        return this.create();
    }
}

export let header = new Header().init();


