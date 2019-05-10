import Build from './Build.js'
import LeanStartup from './LeanStartup.js'
import Learn from './Learn.js'
import Measure from './Measure.js'
import SinopiaDemo from './SinopiaDemo.js'

customElements.define(`build-one`, Build)
customElements.define('lean-startup', LeanStartup)
customElements.define(`learn-one`, Learn)
customElements.define('measure-one', Measure)
customElements.define('sinopia-demo', SinopiaDemo)

class WorkCycleOne extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
      <style>
        .intro {
          background-image: url("img/home-background.png");
          border: 1px solid black;
          padding: .5em;
        }
        .bml-loop {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10px;
          grid-auto-rows: minmax(100px, auto);
         }
      </style>
      <div id="work-cycle-one">
        <div class="intro">
          <h4 style="float: right"><a href="https://ld4p.github.io/lean-dev-sinopia-stack/">https://ld4p.github.io/lean-dev-sinopia-stack/</a></h4>

          <h2>Sinopia Work-Cycle One</h2>
          <h1>Lean Development of the Sinopia Stack</h1>
          <p>by Jeremy Nelson &amp; Joshua Greben<br/>
           <a href="http://library.stanford.edu/">Stanford University Libraries</a>
           </p>
        </div>
        <lean-startup></lean-startup>
        <br />
        <div class="bml-loop">
          <build-one slot="loop"></build-one>
          <sinopia-demo></sinopia-demo>
          <measure-one slot="loop"></measure-one>
        </div>
        <learn-one slot="loop"></learn-one>
      </div>
    `
  }
}

export default WorkCycleOne
