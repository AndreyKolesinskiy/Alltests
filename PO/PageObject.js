module.exports = new marketingPage();

function marketingPage() {
    var that = this;
    var EC = protractor.ExpectedConditions;
    that.chooseMenu = function () {
       var menu = element(by.linkText('Publikationspflege'));
       menu.click();
       var header = element(by.binding('applicationTitle'));
       that.header = header;

    };
    that.chooseFolder = function () {
        browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', '40, Herbst/Winter 2015/2016'))).perform();
    };
    that.chooseSubFolder = function () {
        browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', 'Prospekt'))), 5000);
        browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', 'Prospekt'))).perform();
    };
        that.getPreise = function () {
        browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017'))), 5000);
        element(by.cssContainingText('.aciTreeText', '6556 Schwarzpreis ET: 02.03.2017')).click();
    };
        var Nummer = element(by.model('publication.name'));
        var Typ = element(by.model('publication.type'));
        var ET = element.all(by.model('dateItem')).first();
        var Preise = element(by.model('publication.priceType'));
        var Country =  element(by.model('publication.country'));
        var Com = element(by.model('publication.description'));
        that.Nummer = Nummer;
        that.Typ = Typ;
        that.ET = ET;
        that.Preise = Preise;
        that.Country = Country;
        that.Com = Com;

    that.enteringNummer = function (number) {
        Nummer.clear();
        Nummer.sendKeys(number);
    };
    that.enteringType = function () {
        Typ.$('[value="21"]').click();
    };
    that.enteringET = function (date) {
        ET.clear();
        ET.sendKeys(date);
    };
    that.enteringPreise = function () {
        Preise.$('[value="1"]').click();
    };
    that.enteringLand = function () {
        Country.$('[value="166"]').click();
    };
    that.enteringComment = function (comment) {
        Com.sendKeys(comment);
    };
    that.clickReset = function () {
        element(by.css('.fa-undo')).click();
    };
    var checkCleaning = element(by.cssContainingText('.cp-text-color.ng-binding.ng-hide', 'Noch nichts geändert'));
    that.checkCleaning = checkCleaning;
};