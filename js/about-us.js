import { $, _id, _class, goHomeLinkCreator, scrollPageToTop } from './global-properties.js'

goHomeLinkCreator();
scrollPageToTop();

let moreInfoBtn = _class("more-info-btn");
let lessInfoBtn = _class("less-info-btn");

for (let i = 0; i < moreInfoBtn.length; i++) {
    moreInfoBtn[i].addEventListener('click', event => {
        event.target.previousElementSibling.childNodes[3].style.display = 'inline';
        event.target.nextElementSibling.style.display = 'block';
        event.target.style.display = 'none';
        event.target.previousElementSibling.childNodes[1].style.opacity = '1';
        event.target.previousElementSibling.childNodes[1].childNodes[1].style.display = 'none';
    })
}

for (let i = 0; i < lessInfoBtn.length; i++) {
    lessInfoBtn[i].addEventListener('click', event => {
        event.target.previousElementSibling.previousElementSibling.childNodes[3].style.display = 'none'
        event.target.previousElementSibling.style.display = 'block';
        event.target.style.display = 'none';
        event.target.previousElementSibling.previousElementSibling.childNodes[1].style.opacity = '0.5';
        event.target.previousElementSibling.previousElementSibling.childNodes[1].childNodes[1].style.display = 'inline';
    })
}