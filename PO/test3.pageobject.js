module.exports = new StammdatenPage();

function StammdatenPage () {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.menu =  element.all(by.css('.panel-heading')).last();
    that.submenu =  element(by.linkText('Vorteile'));
    that.header = element(by.id('header'));
    that.name = element(by.model('item.name'));
    that.chooseName = element(by.cssContainingText('.ng-binding.ng-scope', 'VR_2'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.enteringName = element(by.css('.modal-body')).element(by.model('item.name'));
    that.nameConfirmation = element(by.buttonText('Anlegen'));
    that.newName = element(by.cssContainingText('.ng-binding.ng-scope', 'Test_create'));
    that.saveButton = element(by.css('.fa-floppy-o'));
    that.changedName = element(by.cssContainingText('.ng-binding.ng-scope', 'Test_edit'));
    that.minusButton = element(by.css('.glyphicon-minus'));
    that.yesButton = element(by.buttonText('Ja'));

    that.chooseMenu = function () {
        browser.wait(EC.visibilityOf(that.menu), 5000);
        that.menu.click();
    };
    that.chooseSubMenu = function () {
        browser.wait(EC.visibilityOf(that.submenu), 5000);
        that.submenu.click();
    };
};