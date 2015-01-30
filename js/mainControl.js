var app = angular.module('parseQ');

app.controller('mainControl', function($scope, parseService){
  
  $scope.postParseData = function(){
    parseService.postData($scope.newQuestion).then(function(res){
      console.log(res);
      $scope.newQuestion = '';
      $scope.getParseData();
    });
  }
  $scope.getParseData = function(){
    parseService.getData().then(function(data){
      $scope.questions = data;
    })
  }

  $scope.removeParseData = function(objectId){
    parseService.removeData(objectId).then(function(response){
      console.log(response);
      $scope.getParseData();
    })
  }
 
   $scope.updateParseData = function(objectId, status){
     parseService.updateData(objectId, status).then(function(response){
       console.log(response);
       $scope.getParseData();
     })
   }


  $scope.getParseData();
})