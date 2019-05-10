class Measure extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <style>
     quote {
       display: block;
       border: 1px dotted black;
       background-color: white;
       padding: .5em;
     }

    </style>
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
     <p>From the <a href="https://docs.google.com/presentation/d/1J2sXwgkDzBRNzz3dshr-Iq6UJzplG9Snr0AaF182gAs/edit#slide=id.g4093c7a9c1_2_0">inception deck presentation</a> for 
     Sinopia's current work-cycle, the first three criteria are:
     <quote>Create original bibliographic metadata for library materials in the domains and formats supported 
      by a limited set of profiles, roughly equivalent to LC’s current set of profiles</quote>
     <br>
     <quote>Make changes to metadata created in Sinopia</quote>
     <br>
     <quote>Search and view data created in Sinopia</quote>
     <p>Sinopia's use of <a href="https://github.com/trellis-ldp">Trellis</a> to store the RDF provides 
     <a href="https://tools.ietf.org/html/rfc7089">Memento</a> artifacts for version tracking of events like 
     RDF creation and modification that includes that will allow us to generate usages reports for measuring
     impact among the cohort of insitutions who will first be using Sinopia.</p>
    </div>`
  }
}

export default Measure
