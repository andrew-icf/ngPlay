angular
  .module("ngPlay")
  .controller('HomeController', HomeController);

function HomeController(){
  var vm = this;
  vm.name = "Andrew";
}
