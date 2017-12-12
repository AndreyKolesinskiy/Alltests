module.exports = new PublikationspflegePage();

function PublikationspflegePage () {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.submenu =  element(by.linkText('Publikationspflege'));
    that.header = element(by.id('header'));
    that.newSubmenu = element(by.cssContainingText('.list-group-item', 'Streuplan'));
    that.reportButton = element(by.css('.glyphicon-file'));

    that.chooseSubMenu = function () {
        browser.wait(EC.visibilityOf(that.submenu), 5000);
        that.submenu.click();
    };
    that.closeFolder = function (mainFolder) {
        browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', mainFolder))).perform();
    };
};