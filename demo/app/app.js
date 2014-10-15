;(function(){
  'use strict';
    angular
      .module('app', [
        'ngFx',
        'data',
        'color'])
      .controller('ColorsCtrl', ColorsCtrl);



    function ColorsCtrl($http, $scope, Color){
      $scope.service = Color
      $scope.service.getColors()
        .then(function (response){
          console.log(response)
          $scope.colors = response;
          return
        });


      $scope.selectBG = function(color){
        console.log(color)
        $scope.selectedBG = color;
        $scope.selectedName = color.name;
        $scope.showBg = true;
        // $scope.colors = color.colors;
      }
      $scope.resetBG = function(){
        $scope.selectedName = null;
        $scope.showBg = false;
      }

      $scope.selectBtn = function(color){
        console.log(color)
        $scope.selectedBtn = color;
        $scope.selectedName = color.name;
        $scope.showBtn = true;
        // $scope.colors = color.colors;
      }
      $scope.resetBtn = function(){
        $scope.selectedName = null;
        $scope.showBtn = false;
      }


          // $scope.colors = $scope.service.$object();


    }

}).call(this);