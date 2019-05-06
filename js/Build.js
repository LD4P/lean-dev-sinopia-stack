import Pivot from './Pivot.js'
import SinopiaDemo from './SinopiaDemo.js'

customElements.define('pivot-modal-to-outline', Pivot)
customElements.define('sinopia-demo', SinopiaDemo)
class Build extends HTMLElement {

  static get observatedAttributes() {

  }

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div id="build" style="grid-column: 1/3; grid-row: 1;">
     <h1>Build Phase</h1>
     <h3>September 2018 to May 2019</h3>
     <p>Starting in September 2018, the Sinopia development team lead by project
     owner Michelle Futornick, started implementing the Sinopia Stack based on the
     technical artecture created by Christina Harlow.</p>
     <pivot-modal-to-outline></pivot-modal-to-outline>
     <h2>Minimum Viable Product -- Work Cycle One</h2>
     <sinopia-demo></sinopia-demo>
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
