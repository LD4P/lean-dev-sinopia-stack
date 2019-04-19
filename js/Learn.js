class Learn extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div id="learn" style="grid-column: 2/3; grid-row: 1;">
     <h1>Learn Phase</h1>
     <p class="intro">
       The <em>Learn</em> phase of the <strong>BML</strong> loop for
       this Work Cycle, will start in earnest once we have received and organized
       the actionable metrics from the <em>Measure</em> phase.
     </p>
    </div>
    `
  }
}

export default Learn
