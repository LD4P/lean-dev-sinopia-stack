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
        height: 80%;
      }
    </style>
    <div class="demo">
      <h1>Minimum Viable Product -- Work Cycle One</h1>
      <h2>Sinopia Demonstration</h2>
      <p>Currently available on
        <a href="https://development.sinopia.io/">https://development.sinopia.io/</a> &hellip;
      </p>
      <img src="img/sinopia-screenshot.png" />
    </div>`
  }
}
