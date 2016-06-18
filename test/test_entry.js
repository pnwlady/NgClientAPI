/* eslint-disable prefer-arrow-callback*/
var angular = require('angular');
require('angular-mocks');
require('../app/js/entry.js');

describe('the look up function', function() {
 var $httpBackend;
 var $controller;

 beforeEach(angular.mock.module('gitHubLU'));
 beforeEach(angular.mock.inject(function(​_$httpBackend_​, ​_$controller_​) {
   $httpBackend = ​_$httpBackend_​;
   $controller = ​_$controller_​;
 }));

 afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

 it('should make a request to the github api', function() {
   var userCtrl = $controller('UserController');
   $httpBackend.expectGET(config.baseUrl + config.port + '/api/palindrome',
     { text: 'lotsOText' }).respond(200, { result: 'aPalindrome' });
   palctrl.submitPalindrome('lotsOText');
   $httpBackend.flush();
   expect(palctrl.palindromes.length).toBe(1);
   expect(palctrl.palindromes[0].result).toEqual('aPalindrome');
 });
});
