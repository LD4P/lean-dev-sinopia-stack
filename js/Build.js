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
     <h3>Milestones 1-4</h3>
     <p>A detailed list of features the Sinopia team are developing for the MVP
       is available in the
       <a href="https://docs.google.com/document/d/1XpiH3OCygbnxEMuzGmpDFpXX_wV9SOAWY5y2ywXGmfg/">Technical Project Plan</a>.
     <ol>
      <li>
        <h4>Stand-Alone Profile Editor and Sinopia Homepage in UAT in AWS</h4>
      </li>
      <li>
        <h4>Profile "Dress Rehearsal" and Components Confirmed</h4>
      </li>
      <li>
        <h4>User Login and "Profile Opening Night</h4>
      </li>
      <li>
        <h4>Production of Original Data: Create and save data in Editor</h4>
      </li>
     </ol>
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
