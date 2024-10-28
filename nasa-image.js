import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NasaImage extends DDDSuper(I18NMixin(LitElement)){
  

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.description = '';
    this.owner = '';
    this.link = '';
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      description: { type: String },
      owner: { type: String},
      link: { type: String}
    };
  }

  static get styles() {
    return [css`
    

    .image{
      display: flex;
      flex-direction: column;
      gap: var(--ddd-spacing-3, 20px);;
      max-width: 240px;
      padding: var(--ddd-spacing-5, 20px);
      border: var(--ddd-border-sm, black solid 3px);
      font-family: var(--ddd-font-primary, roboto);
      font-weight: var(--ddd-font-weight-bold, bold);
      font-size:16px;
      color: var(--ddd-theme-primary);
      background-color: var(--ddd-theme-accent);
      /* padding: 20px; */
    }

    .image div {
    max-width: 200px;
    font-size: 16px;
    font-weight: bold;
    }

    .image img {
    display: block;
    width: 200px;
    height: 200px;
    }

    .image:hover{
      background-color: var(--ddd-theme-default-creekLight,lightcyan);  
      color: black;
    }

    `];
  }

  render() {
    return html`
    <div class="image"
        tabindex="0"
        @click="${this.openNewPage}"
        @keydown="${this.handleKeyDown}">
        <img 
          src="${this.source}" 
          alt="${this.description}"/>

        <div>Image title: ${this.title}</div>
        <div>Owner: ${this.owner}</div>
    </div>
    `;
  }

  openNewPage() {
    window.open(this.source);
  }

  handleKeyDown() {
    if (e.key === 'Enter') {
      this._openNewPage();
    }
  }

  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);