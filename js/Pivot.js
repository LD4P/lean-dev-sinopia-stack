class Pivot extends HTMLElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow( { mode: 'open'} )
    shadowRoot.innerHTML = `
    <div id="pivot">
        <h2>Pivot from Modals to Outlines</h2>
        <p>An important concept from Lean Startup methodology is the idea of project pivot. Based on feedback and
        metrics from using (or lack of use) of the MVP, a team or company should be willing to shift 
        the focus, technology, or even industry, if the metrics suggest the current effort is not
        meeting expectations. For the Sinopia project, an important pivot occured when during early user 
        interface introduction during a Code4Lib pre-conference, many of the users complained about the use 
        of nested pop-up modals for entering data that was copied from the Library of Congress BFE.</p>
        <p>Astrid Usong, Sinopia's User Interface expert, showed an early design where instead of modals, 
        the Linked Data Editor used an outline to represent these the same embedded resource templates instead 
        of modals. Because of the technology choices that decomposed the user interface into separate React 
        compoenents, the Sinopia team was able to pivot to using this outline user interface.</p>
    </div>`
 
    }
}



export default Pivot
