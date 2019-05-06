export default class SinopiaDemo extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div>
      <h1>Sinopia Demonstration</h1>
      <p>Currently available on
        <a href="https://development.sinopia.io/">https://development.sinopia.io/</a> &hellip;
      </p>
    </div>`
  }
}
