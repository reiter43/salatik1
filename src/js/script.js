import "./vendors/slider-owl";
import 'lazysizes';

// import tab from './modules/tabs';
import menu from './modules/menu';
import modalWindow from './modules/modal';
// import { dropDown, dropDownAct } from './modules/dropdown';
import check from './modules/checkbox';
import accordion from './modules/accordion';
import scroll from './modules/scroll';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    check('.checkbox-footer__input');
    modalWindow('#fruits', '#modal-fruits');
    modalWindow('#meat', '#modal-meat');
    modalWindow('#vegetables', '#modal-vegetables');
    modalWindow('#greenery', '#modal-greenery');
    modalWindow('#fish', '#modal-fish');
    menu('.burger', '.nav__link--drop');
    accordion('.accordion__head');
    scroll();
});


