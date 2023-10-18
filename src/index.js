import { createButtons } from "./buttons";
import { loadContact } from "./contact";
import { loadHome } from "./home";
import { loadMenu } from "./menu"

const pageLoad = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    //add title text
    const titleDiv = document.createElement('div');
    const title = document.createElement('h1')
    title.textContent = 'this restaurant sucks'

    titleDiv.appendChild(title)
    content.appendChild(titleDiv)

    const buttonDiv = createButtons();
    content.appendChild(buttonDiv)
}

pageLoad();