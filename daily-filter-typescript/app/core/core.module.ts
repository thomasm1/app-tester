                                                                       'use strict';
namespace dogsrus.virtdog {
  angular.module('app.core', [
    /* Angular modules */
    'ngRoute',
    
    /* reusable cross app code modules, e.g.  exception service, logger service    */

    
    /*  3rd Party modules  */ 
     'ngAnimate',

  ]);
  export function getModuleCore(): ng.IModule {
    return angular.module('app.core');
  }
}
