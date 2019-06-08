"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var lit_element_1 = require("lit-element");
var componentCSS = require('./app.component.scss');
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'This title can be overwritten in the custom element by the attribute "title"';
        return _this;
    }
    AppComponent.prototype.render = function () {
        return lit_element_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-12 p-5\">\n          <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header\">Web Component</div>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">", "</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n                content.</p>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>"], ["\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-12 p-5\">\n          <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header\">Web Component</div>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">", "</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's\n                content.</p>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>"])), this.title);
    };
    AppComponent.styles = lit_element_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["", ""], ["", ""])), lit_element_1.unsafeCSS(componentCSS));
    __decorate([
        lit_element_1.property()
    ], AppComponent.prototype, "title");
    AppComponent = __decorate([
        lit_element_1.customElement('app-starter')
    ], AppComponent);
    return AppComponent;
}(lit_element_1.LitElement));
var templateObject_1, templateObject_2;
