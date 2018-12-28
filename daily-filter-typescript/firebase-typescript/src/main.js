"use strict";
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app/app.module');
var environment_1 = require('./environments/environment');
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUErQixlQUFlLENBQUMsQ0FBQTtBQUMvQyx5Q0FBdUMsbUNBQW1DLENBQUMsQ0FBQTtBQUUzRSwyQkFBMEIsa0JBQWtCLENBQUMsQ0FBQTtBQUM3Qyw0QkFBNEIsNEJBQTRCLENBQUMsQ0FBQTtBQUV6RCxFQUFFLENBQUMsQ0FBQyx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDM0IscUJBQWMsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFFRCxpREFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDO0tBQ2hELEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FBQyJ9