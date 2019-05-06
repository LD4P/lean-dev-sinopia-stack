
export default class LeanStartup extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div>
      <h1>Lean Startup</h1>
      <p>The Lean Startup software development methodology &hellip;</p>
    </div>`
  }
}
