import Pivot from './Pivot.js'

customElements.define('pivot-modal-to-outline', Pivot)
class Build extends HTMLElement {

  static get observatedAttributes() {

  }

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div id="build" style="grid-column: 1/3; grid-row: 1;">
     <h1>Build Phase</h1>
     <p>Starting in September 2018, the Sinopia development team lead by project
     owner Michelle Futornick, started implementing the Sinopia Stack based on the
     technical artecture created by Christina Harlow.</p>
     <pivot-modal-to-outline></pivot-modal-to-outline>
    </div>
    `
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    // switch(attr) {
    //   case '':
    //   default:
    //
    // }
  }

  connectedCallback() {

  }
}

export default Build
