var page = require('../PO/marketingPage.js');
var util = require ('../PO/utilmethods.js');

describe('Test5', function () {
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it('Checking title', function () {
        util.selectMenuAndSubmenu('MARKETING', 'Publikationspflege');
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege', 'title is incorrect');
    });
    it('Choosing record', function () {
        util.selectRecord('39, Frühling/Sommer 2015', 'Inszenierungspunkt', '3911 Schwarzpreis ET: 04.03.2016');
    });
    it('Choosing new menu and checking it', function () {
        util.selectMenuAndSubmenu('EINKAUF', 'Seitenplanung');
        expect(page.header.getText()).toBe('PuC.Marketing Seitenplanung', 'new title is incorrect');
    });
    it('Saving the file', function () {
        page.reportButton.click();
        util.closeFolder('39, Frühling/Sommer 2015');
    });
});