"use strict";
var app_po_1 = require('./app.po');
describe('workspace-project App', function () {
    var page;
    beforeEach(function () {
        page = new app_po_1.AppPage();
    });
    it('should display welcome message', function () {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to ngHosting!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUyZS1zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLmUyZS1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBd0IsVUFBVSxDQUFDLENBQUE7QUFFbkMsUUFBUSxDQUFDLHVCQUF1QixFQUFFO0lBQ2hDLElBQUksSUFBYSxDQUFDO0lBRWxCLFVBQVUsQ0FBQztRQUNULElBQUksR0FBRyxJQUFJLGdCQUFPLEVBQUUsQ0FBQztJQUN2QixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRTtRQUNuQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9