var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, unsafeCSS } from 'lit-element';
const componentCSS = require('./loading-spinner.component.scss');
/*
Created by Marius Bongarts on 05.04.2019.
This custom element is used to create bootstrap
loading spinner in the middle of the page
*/
let FeatherIcon = class FeatherIcon extends LitElement {
    render() {
        return html `
<div id="spinner" class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
    `;
    }
};
FeatherIcon.styles = css `${unsafeCSS(componentCSS)}`;
FeatherIcon = __decorate([
    customElement('app-loading-spinner')
], FeatherIcon);
//# sourceMappingURL=loading-spinner.component.js.map