var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
const componentCSS = require('./app.component.scss');
let AppComponent = class AppComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'This title can be overwritten in the custom element by the attribute "title"';
    }
    render() {
        return html `
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-5">
          <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
            <div class="card-header">Web Component</div>
            <div class="card-body">
              <h5 class="card-title">${this.title}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
            </div>
          </div>

        </div>

      </div>
    </div>`;
    }
};
AppComponent.styles = css `${unsafeCSS(componentCSS)}`;
__decorate([
    property()
], AppComponent.prototype, "title", void 0);
AppComponent = __decorate([
    customElement('app-starter')
], AppComponent);
//# sourceMappingURL=app.component.js.map