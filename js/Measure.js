class Measure extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div id="measure" style="grid-column: 2/3; grid-row: 1;">
     <h1>Measure Phase</h1>
     <h2>Developer Metrics</h2>
     <ol>
       <li>Passing all unit and integration tests<br>
         Sinopia Linked Data Editor:<br>
        <a href="https://circleci.com/gh/LD4P/sinopia_editor">
          <img src="https://circleci.com/gh/LD4P/sinopia_editor.svg?style=svg" />
        </a><br>
         Sinopia Server:<br>
         <a href="https://circleci.com/gh/LD4P/sinopia_server">
          <img src="https://circleci.com/gh/LD4P/sinopia_server.svg?style=svg" />
         </a>
        </li>
        <li>Code Coverage (percentage of code that is covered by tests)
        <a href="https://coveralls.io/repos/github/LD4P/sinopia_editor">
          <img src="https://coveralls.io/repos/github/LD4P/sinopia_editor/badge.svg?branch=master" />
        </a>
       </li>
     </ol>
     <h2>Cataloger/User Metrics</h2>
     <p>Through Sinopia
    </div>`
  }
}

export default Measure
