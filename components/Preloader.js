class Preloader {
    create() {
        this.preloader = document.createElement('div');
        this.preloader.className = 'preloader';
        this.loader = document.createElement('div');
        this.loader.className = 'loader';
        this.preloader.append(this.loader);
        document.body.append(this.preloader);
    }

    init() {
        this.create();
        window.addEventListener('load', () => {
            setTimeout(() => {
                if(!this.preloader.classList.contains('done')) {
                    this.preloader.classList.add('done');
                }
            },2000)
        })
    }
}

export let preloader = new Preloader().init();



