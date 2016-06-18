const angular = require('angular');

var gitHubLU = angular.module('gitHubLU', []);

gitHubLU.controller('UserController', ['$http', function($http) {
  this.userName = [];
  this.lookUp = function() {
    console.log('testing');
    $http.get('https://api.github.com/user/' + this.userName + '/?access_token=' + process.env.GITHUB_TOKEN)
    .then(
      function(res) {
        console.log(res);
      }
    );
  };
}]);
