import * as html from './home.html';
import * as css from './home.css';
import * as commonCss from '../common.css';
import { getTemplate } from '../utils';

export class HomeComponent extends HTMLElement {
  /**
   *
   */
  constructor() {
    super();
    this.init();
  }

  connectedCallback() {
    this.querySelector('.js-footer-year').innerHTML = new Date().getFullYear() + '';
  }

  private init = () => {
    const template = getTemplate(html, [commonCss, css]);
    this.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define('paara-home', HomeComponent);