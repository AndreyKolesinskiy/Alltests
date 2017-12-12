var page = require('../PO/test2.pageobject.js');

describe('Test2', function () {
    beforeAll( function (){browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');});
    it ('Checking title', function () {
        page.chooseMenu();
        page.chooseSubMenu();
       expect(page.header.getText()).toBe('PuC.Marketing Saisons', 'title is incorrect');
    });
it ('Choosing number and checking input values', function() {
    page.chooseNumber.click();
    expect(page.name.getAttribute('value')).toBe('34', 'name is incorrect');
    expect(page.saisontyp.getAttribute('value')).toBe('Herbst/Winter 2012/2013', 'saisontyp is incorrect');
    expect(page.startDatum.getAttribute('value')).toBe('01.09.2012', 'startDatum is incorrect');
    expect(page.endDatum.getAttribute('value')).toBe('28.02.2013', 'endDatum is incorrect');
});











});