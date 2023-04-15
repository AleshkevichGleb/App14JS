class Utilies {
    draw() {
        let title = document.createElement('title');
        title.innerHTML = 'Shop';

        let charset = document.createElement('meta')
        charset.setAttribute('charset', 'UTF-8')

        let metaViewPort = document.createElement('meta');
        metaViewPort.setAttribute('name','viewport');
        metaViewPort.setAttribute('content','width=device-width, initial-scale=1.0');

        let styles = document.createElement('link');
        styles.setAttribute('rel','stylesheet');
        styles.setAttribute('href','../css/index.css');
        document.head.prepend(charset, metaViewPort, styles, title)
    }
}

export const utilies = new Utilies().draw();