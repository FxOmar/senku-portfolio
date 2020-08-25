import { LitElement, html, customElement } from 'lit-element'

@customElement('hello-world')
export class helloWorld extends LitElement {
    render() {
        return html`<div>Hello from MyElement!</div>`
    }
}