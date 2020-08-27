import 'assets/css/main.css'
import head from 'head'
import { html, render } from 'lit-html';
import {cache} from 'lit-html/directives/cache.js';



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

                if ((typeof prop) === 'string') {
                    createTages.innerText = prop
                } else {
                    for (const [key, value] of Object.entries(prop)){
                        createTages.setAttribute(key, value)
                    }
                }
                frag.appendChild(createTages)
            })
        })
        const header = () => html`${cache(frag)}`
        render(header(), document.head)
    }
}


setHeader()
const template = () => html`<my-app></my-app>`

// Render the template to the document
render(template(), document.body);

