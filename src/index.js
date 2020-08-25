import { LitElement, html } from 'lit-element'
import head from 'head'

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

function createHead() {
    const frag = document.createDocumentFragment()

    Object.keys(head).forEach((key) => {

        head[key].forEach((prop) => {
            const tag = document.createElement(key)

            for (let [key, value] of Object.entries(prop)){
                tag.setAttribute(key, value)
                console.log(tag.isConnected)
                frag.appendChild(tag)
            }
        })
    })
    document.head.appendChild(frag)
}


const app = document.createElement('div')
app.classList = 'app'
app.innerHTML = '<my-app></my-app>'
document.body.appendChild(app);
createHead(head)



