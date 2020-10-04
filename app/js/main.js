'use strict';

import { Menu } from "./Menu";

window.addEventListener('load', function () {

    const menu = new Menu({
        button: document.querySelector('.header-menu__btn'),
        hamburger: document.querySelector('.header-menu__burger'),
        menu: document.querySelector('.header-menu'),
        activeClass: 'active'
    });

    menu.init();

});