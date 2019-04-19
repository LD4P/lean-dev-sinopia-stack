import Build from './Build.js'
import Learn from './Learn.js'
import Measure from './Measure.js'

customElements.define(`build-one`, Build)
customElements.define(`learn-one`, Learn)
customElements.define('measure-one', Measure)

class WorkCycleOne extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
      <div id="work-cycle-one">
        <h2>Sinopia Work-Cycle One</h2>
        <h1>Lean Development of the Sinopia Stack</h1>
        <p>by Jeremy Nelson<br/>
           Sinopia Technical Lead<br/>
           Stanford University Libraries
        </p>
        <div class="bml-loop">
          <build-one slot="loop"></build-one>
          <measure-one slot="loop"></measure-one>
          <learn-one slot="loop"></learn-one>
        </div>
      </div>
    `
  }
}

export default WorkCycleOne
