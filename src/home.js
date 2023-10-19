import { createButtons } from "./buttons";
import { loadContact } from "./contact";
import { loadMenu } from "./menu";


const loadHome = () => {
    const content = document.querySelector('#content')

    content.innerHTML = '';

    const homeTitle = document.createElement('h1')
    homeTitle.textContent = 'sorry i don\'t have a home page'

    content.appendChild(homeTitle)

    const buttonDiv = createButtons();
    content.appendChild(buttonDiv)

    const homeText = document.createElement('p')
    homeText.textContent = 'but here is a home on a page'
    content.appendChild(homeText)
    
    const homeImage = document.createElement('img')
    homeImage.setAttribute('src', 'images/home.jpeg')

    content.appendChild(homeImage)

}

export {loadHome}