import { LitElement, html } from 'lit-element'

import 'components/HelloWorld';

export class App extends LitElement {
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