import 'assets/css/main.css'
import head from 'head'
import { html, render } from 'lit-html';


// 

import 'App'

// 
function setHeader () {
    if ((Object.keys(head).length === 0 && head.constructor === Object)) {
        return
    } else {
        const frag = document.createDocumentFragment()
    
        Object.keys(head).forEach((tag) => {
    
            head[tag].forEach((prop) => {
                const createTages = document.createElement(tag)
    
                const selector = Object.entries(prop)[0]
    
                if (document.querySelectorAll(`${tag}[${selector[0]}="${selector[1]}"]`).length < 1) {
                    for (let [key, value] of Object.entries(prop)){
                        createTages.setAttribute(key, value)
                        frag.appendChild(createTages)
                    }
                }
            })
        })
        document.head.appendChild(frag)
    }
}

setHeader()
const template = () => html`<my-app></my-app>`

// Render the template to the document
render(template(), document.body);

