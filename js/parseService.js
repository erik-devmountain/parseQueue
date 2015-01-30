var app = angular.module('parseQ');

app.service('parseService', function($q, $http){
  this.postData = function(newQuestion){
    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/parseQ',
      data: {
        'question': newQuestion, 
        'status': 'unclaimed'
      }
    }).success(function(res){
      deferred.resolve(res);
    })
   return deferred.promise;
  }
  this.getData = function(){
    var deferred = $q.defer();
    $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/parseQ'
    }).success(function(res){
      console.log(res);
      var data = res.results;
      deferred.resolve(data);
    })
    return deferred.promise;
  }
  this.removeData = function(objectId){
    var deferred = $q.defer();
    $http({
      method: 'DELETE',
      url: 'https://api.parse.com/1/classes/parseQ/' + objectId
    }).success(function(res){
      deferred.resolve(res);
    })
    return deferred.promise;
  }
  this.updateData = function(objectId, status){
    if (status === "claimed"){
      var deferred = $q.defer();
      $http({
        method: 'PUT',
        url: 'https://api.parse.com/1/classes/parseQ/' + objectId,
        data: {'status': 'unclaimed'}
      }).success(function(res){
        deferred.resolve(res);
      })
      return deferred.promise;
    } else if (status === "unclaimed"){
    var deferred = $q.defer();
    $http({
      method: 'PUT',
      url: 'https://api.parse.com/1/classes/parseQ/' + objectId,
      data: {'status': 'claimed'}
    }).success(function(res){
      deferred.resolve(res);
    })
    return deferred.promise;
    }
  }
})










