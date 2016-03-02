(function() {
  "use strict";

  angular.module("app").controller("personsCtrl",function($scope){

   $scope.persons = [
    {
      name: "Joe Biden",
      bio: "supercool vp of the us",
      bioVisible: false
    }, {
      name: "Allison Janney",
      bio: "Super awesome actress. Worked on The West Wing, currently on Mom.",
      bioVisible: false
    }];

  $scope.bioToggle = function(person) {
    person.bioVisible = !(person.bioVisible);
  };

  $scope.showBio = function(person) {
    if(person.bioVisible == true) {
      person.bio;
    }
    
  };

  $scope.addPerson = function(newName, newBio) {
      var newPerson = {
        name: newName,
        bio: newBio,
        bioVisible: false
      };

      $scope.persons.push(newPerson);
      $scope.newName = null;
      $scope.newBio = null;
  };

  $scope.removePerson = function(index) {
    $scope.persons.splice(index,1);
  };

  $scope.checkTotal = function() {
    $scope.total = $scope.persons.length;
    true;
  };

  window.scope = $scope;

  });

}());