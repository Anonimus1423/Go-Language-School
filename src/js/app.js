import * as flsFunctions from "./modules/functions.js";
import map from "./modules/map.js"
import scroll from "./modules/header.js"
import { toggleActiveClass } from "./modules/main.js"
import { slideRight, slideLeft } from "./modules/slider.js"
flsFunctions.isWebp();
window.onload = () => {
    map();
}
window.onscroll = scroll;
window.toggleActiveClass = toggleActiveClass;
window.slideRight = slideRight;
window.slideLeft = slideLeft;