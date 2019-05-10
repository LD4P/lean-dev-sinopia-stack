
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
     technical architecture created by Christina Harlow.</p>
     <h3>Milestones 1-4</h3>
     <p>A detailed list of features the Sinopia team are developing for the MVP
       is available in the
       <a href="https://docs.google.com/document/d/1XpiH3OCygbnxEMuzGmpDFpXX_wV9SOAWY5y2ywXGmfg/">Technical Project Plan</a>.
     <ol>
      <li>
        <h4>Stand-Alone Profile Editor and Sinopia Homepage in UAT in AWS</h4>
        <p>In the fall of 2018, the Sinopia team released a lightly modified
        version of the Library of Congress Profile Editor at
        <a href="https://profile-editor.sinopia.io/">https://profile-editor.sinopia.io/</a>
        </p>
      </li>
      <li>
        <h4>Profile "Dress Rehearsal" and Components Confirmed</h4>
        <p>In early 2019, the Sinopia team released an early version of the
         Sinopia Linked Data Editor, inspired by Library of Congress Bibframe
         Editor, that allows users to load resource templates contained in the Profiles
         created in the Profile Editor. We also were able to demostrate the value and 
         utility of using React components for creating the user infrace for the Editor
         based on the structure of the resource templates.
        </p>
      </li>
      <li>
        <h4>User Login and "Profile Opening Night"</h4>
        <p>This month we are starting 
        <a href="https://github.com/LD4P/sinopia/issues/166">User Acceptance Testing</a> 
        for milestone three that requires the user to be able to accomplish the following:</p>
        <ul>
          <li>Authentication / Log In</li>
          <li>User and Group Management</li>
          <li>Adding and Updating Profiles</li>
        </ul>
      </li>
      <li>
        <h4>Production of Original Data: Create and save data in Editor</h4>
        <p>The Sinopia team has started work for Milestone four that will be completed when the 
         following <a href="">User Acceptance Testing</a> is completed:
        <ul>
          <li>Creating and saving RDF data</li>
          <li>Finding Data in Sinopia</li>
          <li>Referring to Sinopia Created Data</li> 
        </ul>
      </li>
     </ol>
    </div>
    `
  }
}

export default Build
