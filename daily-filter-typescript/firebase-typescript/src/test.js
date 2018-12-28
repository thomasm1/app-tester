// This file is required by karma.conf.js and loads recursively all the .spec and framework files
"use strict";
require('zone.js/dist/zone-testing');
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/platform-browser-dynamic/testing');
// First, initialize the Angular testing environment.
testing_1.getTestBed().initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
// Then we find all the tests.
var context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUdBQWlHOztBQUVqRyxRQUFPLDJCQUEyQixDQUFDLENBQUE7QUFDbkMsd0JBQTJCLHVCQUF1QixDQUFDLENBQUE7QUFDbkQsd0JBR08sMkNBQTJDLENBQUMsQ0FBQTtBQUluRCxxREFBcUQ7QUFDckQsb0JBQVUsRUFBRSxDQUFDLG1CQUFtQixDQUM5QixxQ0FBMkIsRUFDM0IsdUNBQTZCLEVBQUUsQ0FDaEMsQ0FBQztBQUNGLDhCQUE4QjtBQUM5QixJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDM0Qsd0JBQXdCO0FBQ3hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMifQ==