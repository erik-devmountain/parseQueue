var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
  return {
    request: function(config){
      config.headers = {'X-Parse-Application-Id': '3cnwMir50qaa9Vx4G3JWcoManUwhu15V5djeDviL', 'X-Parse-REST-API-Key': '9iEnMGAYoBpg9O5I7i44LvPdP7tdGemPRmwWKFEV'}
      return config;
    }
  }
})