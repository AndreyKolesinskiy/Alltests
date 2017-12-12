module.exports = new UtilMethods();

function UtilMethods () {
    var that = this;
    var EC = protractor.ExpectedConditions;

    that.selectRecord = function (mainFolder, subFolder, record) {
        var selectedItem = element(by.css('[aria-selected="true"]'));
        browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', mainFolder))), 5000)
            .then(function () {
                element(by.cssContainingText('.aciTreeText', mainFolder)).click();
                return selectedItem.getAttribute('aria-expanded');
            })
            .then(function (isExpanded){
                if(isExpanded === 'false') {
                    return browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', mainFolder))).perform();}
            })
            .then (function () {return browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', subFolder))), 5000);
            })
            .then (function () {
                element(by.cssContainingText('.aciTreeText', subFolder)).click();
                return selectedItem.getAttribute('aria-expanded');
            })
            .then(function (isExpanded){
                if(isExpanded === 'false') {
                    return browser.actions().doubleClick(element(by.cssContainingText('.aciTreeText', subFolder))).perform();}
            })
            .then (function (){return browser.wait(EC.visibilityOf(element(by.cssContainingText('.aciTreeText', record))), 5000);
            })
            .then (function () {return element(by.cssContainingText('.aciTreeText', record)).click();
            });
    };
};