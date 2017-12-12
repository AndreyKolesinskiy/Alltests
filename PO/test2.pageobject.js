module.exports = new StammdatenPage();

function StammdatenPage () {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.menu =  element.all(by.css('.panel-heading')).last();
    that.submenu =  element(by.linkText('Saisons'));
    that.header = element(by.id('header'));
    that.chooseNumber = element(by.cssContainingText('.col-md-2', '34'));
    that.name = element(by.model('item.identity'));
    that.saisontyp = element(by.model('item.name'));
    that.startDatum = element.all(by.model('dateItem')).first();
    that.endDatum = element.all(by.model('dateItem')).last();

    that.chooseMenu = function () {
        browser.wait(EC.visibilityOf(that.menu), 5000);
        that.menu.click();
    };
    that.chooseSubMenu = function () {
        browser.wait(EC.visibilityOf(that.submenu), 5000);
        that.submenu.click();
    };
};