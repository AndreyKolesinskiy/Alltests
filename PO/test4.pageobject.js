module.exports = new PublikationspflegePage();

function PublikationspflegePage () {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.submenu =  element(by.linkText('Publikationspflege'));
    that.header = element(by.id('header'));
    that.plusButton = element(by.css('.glyphicon-plus'));
    that.enteringSaison = element(by.model('newPublication.season')).$('[label="31, Frühling/Sommer 2011"]');
    that.enteringNummer = element(by.model('newPublication.name'));
    that.enteringTyp = element(by.model('newPublication.type')).$('[label="Inszenierungspunkt"]');
    that.enteringEt = element(by.css('[date-item="newPublication.headET"]')).element(by.model('dateItem'));
    that.enteringPreise = element(by.model('newPublication.priceType')).$('[label="Schwarzpreis"]');
    that.enteringWarenabgabe = element(by.css('[date-item="newPublication.goodsDelivery"]')).element(by.model('dateItem'));
    that.enteringLand = element(by.model('newPublication.country')).$('[label="Deutschland"]');
    that.enteringKommentar = element(by.model('newPublication.description'));
    that.alegenButton = element(by.buttonText('Anlegen'));
    that.newRecord = element(by.cssContainingText('.aciTreeText', ' Schwarzpreis ET: 05.05.2017'));
    that.trashButton = element(by.css('.glyphicon-trash'));
    that.jaButton = element(by.buttonText('Ja'));


    that.chooseSubMenu = function () {
        browser.wait(EC.visibilityOf(that.submenu), 5000);
        that.submenu.click();
    };
    that.randomInteger = function (min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1);
        that.rand = Math.round(rand);
        return that.rand;
    };
    that.checkNewRecord = function () {
        browser.wait(EC.visibilityOf(that.newRecord), 5000);
        expect(that.newRecord.isPresent()).toBe(true, 'new record was not created');
    };
    that.closeFolder = function () {
        browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', '31, Frühling/Sommer 2011'))).perform();
    };
};