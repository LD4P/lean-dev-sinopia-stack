import Pivot from './Pivot.js'


customElements.define('pivot-modal-to-outline', Pivot)

export default class SinopiaDemo extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
      .demo {
        background-color: white;
        border: 1px solid black;
        padding: .5em;
        height: 50%;
      }
    </style>
    <div class="demo">
      <h1>Sinopia's Minimum Viable Product</h1>
      <h2>Work Cycle One</h2>
      <p>Currently available on
        <a href="https://development.sinopia.io/">https://development.sinopia.io/</a>
      </p>
      <img src="img/sinopia-screenshot.png" />
    </div>
    <br>
    <pivot-modal-to-outline></'pivot-modal-to-outline>`
  }
}
