"use strict";
var protractor_1 = require('protractor');
var AppPage = (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQkFBcUMsWUFBWSxDQUFDLENBQUE7QUFFbEQ7SUFBQTtJQVFBLENBQUM7SUFQQyw0QkFBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEI7UUFDRSxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGVBQU8sVUFRbkIsQ0FBQSJ9