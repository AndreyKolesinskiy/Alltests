var page = require('../PO/test4.pageobject.js');

describe('Test4', function () {
    beforeAll(function () {
        browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it ('Checking title', function () {
        page.chooseSubMenu();
        expect(page.header.getText()).toBe('PuC.Marketing Publikationspflege', 'title is incorrect');
    });
    it ('Adding new record and checking it', function () {
        page.plusButton.click();
        page.enteringSaison.click();
        page.randomInteger(1000, 9999);
        page.enteringNummer.sendKeys(page.rand);
        page.enteringTyp.click();
        page.enteringEt.clear();
        page.enteringEt.sendKeys('05.05.2017');
        page.enteringPreise.click();
        page.enteringWarenabgabe.clear();
        page.enteringWarenabgabe.sendKeys('05.05.2017');
        page.enteringLand.click();
        page.enteringKommentar.sendKeys('test');
        page.alegenButton.click();
        page.checkNewRecord();
    });
    it ('Deleting new record and checking it', function () {
        page.newRecord.click();
        page.trashButton.click();
        page.jaButton.click();
        expect(page.newRecord.isPresent()).toBe(false, 'new record was not deleted');
        page.closeFolder();
    });
});