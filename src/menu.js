import { createButtons } from "./buttons";
import { loadContact } from "./contact";
import { loadHome } from "./home";

const loadMenu = () => {

    const content = document.querySelector('#content')
    content.innerHTML = ''; 

    const menuTitle = document.createElement('h2')

    menuTitle.textContent = 'we sell trash food';

    content.appendChild(menuTitle)

    const buttonDiv = createButtons();
    content.appendChild(buttonDiv)

    const menuDiv = document.createElement('div')
    const menuSubTitle = document.createElement('h3')
    menuSubTitle.textContent = 'our menu'

    const menuItemOne = document.createElement('p')
    menuItemOne.textContent = 'rotten eggs with cardboard ($55)'

    const menuItemTwo = document.createElement('p')
    menuItemTwo.textContent = 'air with a side of water ($14)'

    const menuItemThree = document.createElement('p')
    menuItemThree.textContent = 'iced tea with a shot of grey goose ($134)'

    menuItemOne.classList.add('menu-item')
    menuItemTwo.classList.add('menu-item')
    menuItemThree.classList.add('menu-item')

    menuDiv.appendChild(menuSubTitle)
    menuDiv.appendChild(menuItemOne)
    menuDiv.appendChild(menuItemTwo)
    menuDiv.appendChild(menuItemThree)

    content.appendChild(menuDiv)
 
}

export {loadMenu}