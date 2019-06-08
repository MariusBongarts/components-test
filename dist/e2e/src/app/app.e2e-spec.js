var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Builder, Browser, By } from 'selenium-webdriver';
import { getShadowRoot } from '../helper/getShadowRoot';
describe('app', () => __awaiter(this, void 0, void 0, function* () {
    let driver;
    let appRoot;
    beforeEach(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield new Builder().forBrowser(Browser.CHROME).build();
        yield driver.get('http://localhost:8080');
        appRoot = yield driver.findElement(By.tagName('app-root'));
    }));
    afterEach(() => __awaiter(this, void 0, void 0, function* () {
        yield driver.quit();
    }));
    it('should find title element', () => __awaiter(this, void 0, void 0, function* () {
        const headerElement = yield (yield getShadowRoot(appRoot)).findElement(By.tagName('app-header'));
        const title = yield (yield getShadowRoot(headerElement)).findElement(By.className('navbar-brand'));
        const content = yield title.getText();
        expect(content).toBe('WG-App');
    }), 3000);
}));
//# sourceMappingURL=app.e2e-spec.js.map