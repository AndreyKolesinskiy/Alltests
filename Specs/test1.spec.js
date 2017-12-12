var page = require('../PO/test1.pageobject.js');
var util = require ('../PO/utilmethods');

describe('Test1', function () {
    beforeAll( function (){browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it ('Checking title', function () {
        page.chooseMenu('Publikationspflege');
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege');
    });
    it('Comparing fields', function () {
        util.selectRecord('40, Herbst/Winter 2015/2016', 'Prospekt', '6556 Schwarzpreis ET: 02.03.2017');
        expect(page.nummer.getAttribute('value')).toBe('6556', 'nummer is incorrect');
        expect(page.typ.getAttribute('value')).toBe('1', 'typ is incorrect');
        expect(page.et.getAttribute('value')).toBe('02.03.2017', 'et is incorrect');
        expect(page.preise.getAttribute('value')).toBe('0', 'preise is incorrect');
    });
    it ('Entering inputs and checking entered information in the fields', function() {
        page.enteringNummer('123');
        page.enteringType('Inszenierungspunkt');
        page.enteringET('01.01.2017');
        page.enteringPreise('Reduziert');
        page.enteringLand('Polen');
        page.enteringComment('This is a comment');
        expect(page.nummer.getAttribute('value')).toBe('123', 'new nummer is incorrect');
        expect(page.typ.getAttribute('value')).toBe('21', 'new typ is incorrect');
        expect(page.et.getAttribute('value')).toBe('01.01.2017', 'new et is incorrect');
        expect(page.preise.getAttribute('value')).toBe('1', 'new preise is incorrect');
        expect(page.country.getAttribute('value')).toBe('166', 'new country is incorrect');
        expect(page.com.getAttribute('value')).toBe('This is a comment', 'new comment is incorrect');

    });
    it ('Clearing inputs', function() {
        page.clickReset();
        //expect(page.checkCleaning.getText()).toBe('Noch nichts geändert');
    });

});