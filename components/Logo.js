class Logo {
    create() {
        let logo = document.createElement("a");
        logo.setAttribute('href', '/');
        let logoImage = document.createElement('img');
        logoImage.setAttribute('src', '../images/logo.png');
        logoImage.className = 'logo';

        logo.append(logoImage);

        return logo;
    }

    init() {
        return this.create();
    }
}

export let logo = new Logo()