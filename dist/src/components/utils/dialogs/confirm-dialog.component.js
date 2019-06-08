var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Settings } from '../../../settings';
import { css, customElement, html, LitElement, property, unsafeCSS } from 'lit-element';
import '@polymer/paper-dialog/paper-dialog';
import { Constants } from '../../../constants';
const componentCSS = require('./confirm-dialog.component.scss');
/*
Created by Marius Bongarts on 27.04.2019.
This custom element is used to create confirmation dialogs by using a polymer paper-diolog custom element
https://www.webcomponents.org/element/@polymer/paper-dialog/elements/paper-dialog
*/
let ConfirmDialogComponent = class ConfirmDialogComponent extends LitElement {
    /*
    Created by Marius Bongarts on 27.04.2019.
    This custom element is used to create confirmation dialogs by using a polymer paper-diolog custom element
    https://www.webcomponents.org/element/@polymer/paper-dialog/elements/paper-dialog
    */
    constructor() {
        super(...arguments);
        this.constants = new Constants(new Settings());
    }
    cancel() {
        this.dispatchEvent(new CustomEvent('cancel', {
            bubbles: true
        }));
    }
    confirm() {
        this.dispatchEvent(new CustomEvent('confirm', {
            bubbles: true
        }));
    }
    render() {
        return html `
      <paper-dialog no-cancel-on-outside-click opened>
        <div class="modal-header my-0">
          <h5 class="modal-title" id="exampleModalLabel">${this.dialog.msg}</h5>
          <button @click=${() => this.cancel()}
            type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body my-2">
        <h6 class="modal-title text-muted" id="exampleModalLabel">${this.dialog.subMsg}</h6>
        </div>
        <div class="modal-footer my-0">
          <button dialog-dismiss @click=${() => this.cancel()}
            type="button" class="btn btn-outline-${this.dialog.cancelColor}" data-dismiss="modal">
            ${this.constants.getConstants().CANCEL}</button>
          <button dialog-confirm autofocus @click=${() => __awaiter(this, void 0, void 0, function* () { return this.confirm(); })}
            type="button" class="btn btn-${this.dialog.confirmColor}">${this.constants.getConstants().CONFIRM}</button>
        </div>

      </paper-dialog>

    `;
    }
};
ConfirmDialogComponent.styles = css `${unsafeCSS(componentCSS)}`;
__decorate([
    property()
], ConfirmDialogComponent.prototype, "dialog", void 0);
ConfirmDialogComponent = __decorate([
    customElement('app-confirm-dialog')
], ConfirmDialogComponent);
//# sourceMappingURL=confirm-dialog.component.js.map