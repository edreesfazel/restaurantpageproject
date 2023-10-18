import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

const createButtons = () => {

    const buttonDiv = document.createElement('div')

    const home = document.createElement('button');
    home.textContent = 'home'
    home.classList.add('button')
    home.addEventListener('click', loadHome)

    const menu = document.createElement('button');
    menu.textContent = 'menu'
    menu.classList.add('button')
    menu.addEventListener('click', loadMenu)

    const contact = document.createElement('button');
    contact.textContent = 'contact'
    contact.classList.add('button')
    contact.addEventListener('click', loadContact)


    buttonDiv.appendChild(home)
    buttonDiv.appendChild(menu)
    buttonDiv.appendChild(contact)

    content.appendChild(buttonDiv)


    return buttonDiv
}

export { createButtons }