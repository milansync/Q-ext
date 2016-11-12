/**
 * Created by SIF 2088 on 11/9/2016.
 */

var win = document.getElementsByTagName('iframe')[0].contentWindow;
angular
  .module('uiGenApp', ['ui.bootstrap',
    'restangular',
    'ngFileUpload',
    'ui.router',
    'angular-loading-bar',
    'http-auth-interceptor'
  ])

  .run(function ($window,$log,$state) {
    $window.onload = function () {
      win.postMessage(JSON.stringify({keys: ['auth_token', 'user_data'], method: "get"}), "*");
      $window.onmessage = function (e) {
        var auth = {auth_token: (e.data.auth_token), user_data: JSON.parse(e.data.user_data)};
        if (auth.auth_token && auth.user_data) {
          $window.localStorage.auth_token = e.data.auth_token;
          $window.localStorage.user_data = e.data.user_data;
          return $state.go('select-article');
        }
        return $state.go('signin');
      };
    }
  });



