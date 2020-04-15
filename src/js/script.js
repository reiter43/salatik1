import "./vendors/slider-owl";
// import "./vendors/slider-slick";

import 'lazysizes';

// import tab from './modules/tabs';
import modalWindow from './modules/modal';
// import { dropDown, dropDownAct } from './modules/dropdown';
import check from './modules/checkbox';
// import accordion from './modules/accordion';


window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    
    check('.checkbox-footer__input');
    modalWindow('#fruits', '#modal-fruits'),
    modalWindow('#meat', '#modal-meat'),
    modalWindow('#vegetables', '#modal-vegetables'),
    modalWindow('#greenery', '#modal-greenery'),
    modalWindow('#fish', '#modal-fish')
});