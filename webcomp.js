/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

class WebsiteSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>${this.getAttribute('name')}</h1>`;
  }
}

window.customElements.define('website-section', WebsiteSection);
