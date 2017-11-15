var page = require('../PO/PageObject.js');
describe('Lab1', function () {
    browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    it ('Checking title', function () {
        page.chooseMenu();
        expect(page.header.getText()).toBe('Publikationspflege');
    });
    it('Comparing fields', function () {
        page.chooseMenu();
        page.chooseFolder();
        page.chooseSubFolder();
        page.getPreise();
        //checking all input fields for correct information
        expect(page.Nummer.getAttribute('value')).toBe('6556');
        expect(page.Typ.getAttribute('value')).toBe('1');
        expect(page.ET.getAttribute('value')).toBe('02.03.2017');
        expect(page.Preise.getAttribute('value')).toBe('0');
    });
    it ('Entering inputs', function() {
        page.enteringNummer('123');
        page.enteringType();
        page.enteringET('01.01.2017');
        page.enteringPreise();
        page.enteringLand();
        page.enteringComment('This is a comment');
        // checking entered information in the fields
        expect(page.Nummer.getAttribute('value')).toBe('123');
        expect(page.Typ.getAttribute('value')).toBe('21');
        expect(page.ET.getAttribute('value')).toBe('01.01.2017');
        expect(page.Preise.getAttribute('value')).toBe('1');
        expect(page.Country.getAttribute('value')).toBe('166');
        expect(page.Com.getAttribute('value')).toBe('This is a comment');

    });
    it ('Clearing inputs', function() {
        page.clickReset();
        expect(page.checkCleaning.getText()).toBe('Noch nichts geändert');
    });

});