var page = require('../PO/marketingPage.js');
var util = require ('../PO/utilmethods.js');
var modal = require ('../PO/vorteileModal.js');

describe('Test3', function () {
    beforeAll (function (){browser.get('http://vtest16:8093/catalog-planning/#/productionsEditor');
    });
    it ('Checking title', function () {
        util.selectMenuAndSubmenu('STAMMDATEN', 'Vorteile');
        expect(page.header.getText()).toBe('PuC.Marketing Vorteile', 'title is incorrect');
    });
    it ('Choosing name and checking it', function () {
        page.vorteileRecord.click();
        expect(page.vorteileName.getAttribute('value')).toBe('VR_2', 'name is incorrect');
    });
    it ('Creating new name', function () {
        page.plusButton.click();
        modal.name.sendKeys('Test_create');
        modal.anlegenButton.click();
        expect(page.newName.isDisplayed()).toBe(true, 'new name was not created');
    });
    it('Changing Test_create to Test_edit and checking it', function (){
        page.newName.click();
        expect(page.vorteileName.getAttribute('value')).toBe('Test_create', 'new name is incorrect');
        page.vorteileName.clear();
        page.vorteileName.sendKeys('Test_edit');
        page.vorteileSaveButton.click();
        expect(page.changedName.isDisplayed()).toBe(true, 'new name was not changed');
    });
    it('Deleting created name and checking that it is not displayed', function (){
        page.changedName.click();
        page.minusButton.click();
        page.yesButton.click();
        expect(page.changedName.isPresent()).toBe(false, 'changed name was not deleted');
    });
});



