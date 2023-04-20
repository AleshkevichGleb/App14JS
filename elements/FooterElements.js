import { logo as Logo } from "../components/Logo.js";

let info = new Map([
    ["../images/location.png", "59 Street, NY, Rose Town"],
    ["../images/phone.png", "+ 123 45 67"],
    ["../images/email.png", "info@gmail.com"]
])

class FooterElements {
    create() {
        let footerContainer = document.createElement('div');
        footerContainer.className = 'footer__container';

        let footerInfo = document.createElement('div');
        footerInfo.className = 'footer__info';

        for(let elem of info) {
            footerInfo.innerHTML += `
                <div>
                    <img src = ${elem[0]} style = "width: 30px; height: 30px">
                    <span>${elem[1]}</span>
                </div>                    
            `;
        }

        footerContainer.append(Logo.init(), footerInfo);


        return footerContainer;
    }

    init() {
        return this.create();
    }
}

export let footerElements = new FooterElements().init();