import { createButtons } from "./buttons"
import { loadHome } from "./home"
import { loadMenu } from "./menu"

const loadContact = () => {
    const content = document.querySelector('#content')
    const myContact = document.createElement('h3')
    content.innerHTML = ''

    myContact.textContent = '818 123 4567'

    content.appendChild(myContact)


    const buttonDiv = createButtons();
    content.appendChild(buttonDiv)

    const funnyText = document.createElement('p')
    funnyText.textContent = 'please do not contact me'

    content.appendChild(funnyText)

    
}

export {loadContact}