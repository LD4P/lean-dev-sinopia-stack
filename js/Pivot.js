class Pivot extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
      <div id="pivot">
        <h2>Pivot from Modals to Outlines</h2>
      </div>
      `
    }
}

export default Pivot
