'use strict';

angular.module('googleAppsApp.auth', [
  'googleAppsApp.constants',
  'googleAppsApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
