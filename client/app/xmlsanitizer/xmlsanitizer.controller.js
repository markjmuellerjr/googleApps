'use strict';
(function(){

class XmlsanitizerComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('googleAppsApp')
  .component('xmlsanitizer', {
    templateUrl: 'app/xmlsanitizer/xmlsanitizer.html',
    controller: XmlsanitizerComponent
  });

var xmlJsonApp = angular.module('xmlJsonApp', []);

  xmlJsonApp.service('convert', function(){
    var convert;
// Service code here
    return convert;
  });

  xmlJsonApp.controller('$scope', function(){
    var fs = require('fs'),
    var xml2js = require('xml2js');

  var parser = new xml2js.Parser();
  fs.readFile('convertFile', function(err, data) {
      parser.parseString(data, function (err, result) {
        JSON.stringify(result);
        console.log('Done');
      });
    });
  });

})();
