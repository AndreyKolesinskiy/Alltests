module.exports = new PublikationspflegePage();

function PublikationspflegePage () {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.marketingSubmenu =  element(by.linkText('Publikationspflege'));
    that.header = element(by.id('header'));
    that.einkaufMenu = element(by.cssContainingText('.panel-title', 'EINKAUF'));
    that.einkaufSubMenu = element(by.linkText('Artikelzuordnung'));
    that.plusButton = element(by.id('center')).element(by.css('.glyphicon-plus'));
    that.enteringPublicationsteil = element(by.model('item.publicationPart')).$('[label="3911"]');
    that.enteringSeite = element(by.model('item.page')).$('[label="Titel"]');
    that.anleigenButton = element(by.buttonText('Anlegen'));
    that.createdCel = element.all(by.css('.htAutocomplete.current')).last();
    that.selectedNumber = element(by.cssContainingText('.row.smallspacer.col-def', 'EShop-Nr.')).$('.input-sm.form-control');
    that.cancelButton = element(by.css('[title="Änderungen zurückstellen"]'));

    that.chooseMarketingSubMenu = function () {
        browser.wait(EC.visibilityOf(that.marketingSubmenu), 5000);
        that.marketingSubmenu.click();
    };
    that.chooseEinkaufSubMenu = function () {
        browser.wait(EC.visibilityOf(that.einkaufSubMenu), 5000);
        that.einkaufSubMenu.click();
    };
};