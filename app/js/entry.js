const angular = require('angular');

var gitHubLU = angular.module('gitHubLU', []);

gitHubLU.controller('UserController', ['$http', function($http) {
  this.userName = '';
  var stats = this;
  this.lookUp = function() {
    console.log('testing');
    $http.get('https://api.github.com/users/' + this.userName)
    .then(
      function(res) {
        stats.data = {
          name: res.data.name,
          image: res.data.avatar_url,
          email: res.data.email,
          followers: res.data.followers,
          following: res.data.following,
          location: res.data.location,
          repos: res.data.public_repos
        };
        stats.userName = null;
        stats.error = null;
      },
      function(err) {
        console.log(err);
        stats.data = null;
        stats.error = 'not a valid GitHub user name';
      }
    );
  };
}]);
