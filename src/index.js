import { LitElement, html } from 'lit-element'

import 'assets/css/main.css'

import 'components/HelloWorld';

class App extends LitElement {
    render() {
        return html`
        <hello-world></hello-woeld>`;
    }
    
    createRenderRoot() {
        /**
         * Render template without shadow DOM. Note that shadow DOM features like
         * encapsulated CSS and slots are unavailable.
         */
        return this;
    }
}

customElements.define('my-app', App)

import head from 'head'
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

function render (tag, id) {
    const app = document.createElement('div')

    app.classList = 'app'
    app.innerHTML = tag

    if (!id) {
        document.body.appendChild(app);
    } else {
        document.getElementById(id).appendChild(app)
    }
    setHeader()
}

render('<my-app></my-app>')



