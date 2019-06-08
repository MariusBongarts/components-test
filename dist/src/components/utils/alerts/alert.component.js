var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
const componentCSS = require('./alert.component.scss');
/*
Created by Marius Bongarts on 05.04.2019.
This custom element is used to create bootstrap alerts.
It takes a bootstrap color (primary, success, danger...etc),
a duration time as a property and an input message in a slot
*/
let AlertComponent = class AlertComponent extends LitElement {
    /*
    Created by Marius Bongarts on 05.04.2019.
    This custom element is used to create bootstrap alerts.
    It takes a bootstrap color (primary, success, danger...etc),
    a duration time as a property and an input message in a slot
    */
    constructor() {
        super(...arguments);
        this.millis = 2000;
    }
    firstUpdated() {
        setTimeout(() => {
            this.close();
        }, this.millis);
    }
    close() {
        this.dispatchEvent(new CustomEvent('close', {
            bubbles: true
        }));
    }
    render() {
        return html `
<div class="alert alert-${this.color}" role="alert">
  <slot name="message"></slot>
</div>
    `;
    }
};
AlertComponent.styles = css `${unsafeCSS(componentCSS)}`;
__decorate([
    property()
], AlertComponent.prototype, "color", void 0);
__decorate([
    property()
], AlertComponent.prototype, "millis", void 0);
AlertComponent = __decorate([
    customElement('app-alert')
], AlertComponent);
//# sourceMappingURL=alert.component.js.map