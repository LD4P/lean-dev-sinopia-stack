
export default class LeanStartup extends HTMLElement {

  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
    .lean {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
      grid-auto-rows: minmax(100px, auto);
     }
    </style>
    <h1>Lean Startup</h1>
    <div class="lean">
      <div>
        <p>Drawing upon the Agle software development practice and from Lean Manufacturing
           processes, Eric Ries, the originator of the Lean Startup management,
           proposed a model for fast, iterative technological development of software
           products and services in what he calls a BML loop, short for three
           phases <strong>Build</strong> - <strong>Measure</strong> - <strong>Learn</strong>.
        </p>
        <p>Pulling requirements from the community or user base, the principle delivierable
           <strong>Build</strong> phase is a <em>MVP</em> - Minimum Valuable Product that attempts
           to deliver just what the users need and ideally, nothing more. The next step
           in the loop is <strong>Measure</strong>, identifying key metrics from which you
           prepare for the final step in the project development lifecycle. Taking the key metrics
           and measurements gathered in the previous step, the <strong>Learn</strong> phase
           involves analyzing these results that structure what will be built in the next
           Build-Measure-Learn loop.
        </p>
      </div>
      <div>
        <p>More details on applying Lean Startup principles to library can be found in my first
           book, <em>Becoming a Lean Library</em>
        </p>
        <img src="img/bll-cover.png" />
      </div>
    </div>`
  }
}
