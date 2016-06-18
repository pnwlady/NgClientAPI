
/* eslint-disable prefer-arrow-callback*/
var angular = require('angular');
require('angular-mocks');
require('../app/js/entry.js');

describe('the look up function', function() {
  var $httpBackend;
  var $controller;

  beforeEach(angular.mock.module('gitHubLU'));
  beforeEach(angular.mock.inject(function(_$httpBackend_, _$controller_) {
    $httpBackend = _$httpBackend_;
    $controller = _$controller_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should make a request to the github api and assign properties to the controller', function() {
    var userCtrl = $controller('UserController');
    $httpBackend.expectGET('https://api.github.com/users/THXBurke')
    .respond(200, { data: { location: 'Seattle', name: 'Rachel Burke', followers: 'millions' } });
    userCtrl.userName = 'THXBurke';
    userCtrl.lookUp();
    $httpBackend.flush();
    expect(userCtrl.data.location).toBe('Seattle');
    expect(userCtrl.data.name).toBe('Rachel Burke');
    expect(userCtrl.data.followers).toBe('millions');
  });
});
