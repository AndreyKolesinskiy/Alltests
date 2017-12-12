var page = require('../PO/test5.pageobject.js');
var util = require ('../PO/utilmethods');

describe('Test5', function () {
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('Checking title', function () {
        page.chooseSubMenu();
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege', 'title is incorrect');
    });
    it('Choosing record', function () {
        util.selectRecord('39, Frühling/Sommer 2015', 'Inszenierungspunkt', '3911 Schwarzpreis ET: 04.03.2016');
    });
    it('Choosing new menu and checking it', function () {
        page.newSubmenu.click();
        expect(page.header.getText()).toBe('PuC.Marketing Streuplan', 'new title is incorrect');
    });
    it('Saving the file', function () {
        page.reportButton.click();
        page.closeFolder('39, Frühling/Sommer 2015');
    });
});