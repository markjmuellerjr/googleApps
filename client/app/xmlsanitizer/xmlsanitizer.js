'use strict';

angular.module('googleAppsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/xmlsanitizer', {
        template: '<xmlsanitizer></xmlsanitizer>'
      });
  });
