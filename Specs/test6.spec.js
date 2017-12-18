var page = require('../PO/marketingPage.js');
var data = require('../Jsons/test6.json');
var util = require ('../PO/utilmethods.js');

describe('Test6', function () {
    beforeAll(function () {
        browser.get(data.server);
    });
    it('Checking title', function () {
        util.selectMenuAndSubmenu('MARKETING', 'Publikationspflege');
        expect(page.header.getText()).toBe(data.pageTitle, 'title is incorrect');
        });
    it('Choosing record', function () {
        util.selectRecord(data.folder, data.subFolder, data.record);
        });
    it('Choosing new menu and checking it', function () {
        util.selectMenuAndSubmenu('EINKAUF', 'Artikelzuordnung');
        expect(page.header.getText()).toBe(data.newPageTitle, 'title is incorrect');
    });
    it('Creating new record', function () {
        page.plusButtonEinkauf.click();
        page.enterPublicationsteil('3911');
        page.enterSeite('Titel');
        page.anlegenButton.click();
        expect(page.createdCel.isPresent()).toBe(true);
    });
    it('Entering new number', function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
        expect(page.selectedNumber.getAttribute('value')).toEqual(data.newRecordNumber, 'number is wrong');
    });
    it('Cancel changes', function () {
        page.cancelButton.click();
        expect(page.selectedNumber.getAttribute('value')).toEqual('', 'page is not clear');
    });
});