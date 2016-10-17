angular
  .module('ngPlay', ['ui-router'])
  .config(config);

function config($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('/home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: '/views/home.html'
    });
}
