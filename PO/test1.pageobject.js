module.exports = new marketingPage();

function marketingPage() {
    var that = this;
    that.header = element(by.id('header'));
    that.nummer = element(by.model('publication.name'));
    that.typ = element(by.model('publication.type'));
    that.et = element.all(by.model('dateItem')).first();
    that.preise = element(by.model('publication.priceType'));
    that.country =  element(by.model('publication.country'));
    that.com = element(by.model('publication.description'));
    that.checkCleaning = element(by.cssContainingText('.cp-text-color.ng-binding.ng-hide', 'Noch nichts geändert'));

    that.chooseMenu  = function (menu){
        element(by.linkText(menu)).click();
    };
    that.enteringNummer = function (number) {
        that.nummer.clear();
        that.nummer.sendKeys(number);
    };
    that.enteringType = function (type) {
        that.typ.$('[label="'+type+'"]').click();
    };
    that.enteringET = function (date) {
        that.et.clear();
        that.et.sendKeys(date);
    };
    that.enteringPreise = function (preise) {
        that.preise.$('[label="'+preise+'"]').click();
    };
    that.enteringLand = function (land) {
        that.country.$('[label="'+land+'"]').click();
    };
    that.enteringComment = function (comment) {
        that.com.sendKeys(comment);
    };
    that.clickReset = function () {
        element(by.css('.fa-undo')).click();
    };
};