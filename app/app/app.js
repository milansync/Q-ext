/**
 * Created by SIF 2088 on 11/9/2016.
 */
window.QUARC_API = 'https://qapi.quezx.com/api';

var win = document.getElementsByTagName('iframe')[0].contentWindow;
angular
  .module('uiGenApp', [])

  .run(function ($window) {
    $window.onload = function () {
      win.postMessage(JSON.stringify({keys: ['oauth', 'userinfo'], method: "get"}), "*");
      $window.onmessage = function (e) {
        var auth = {oauth: JSON.parse(e.data.oauth), userinfo: JSON.parse(e.data.userinfo)};
        if (auth.oauth && auth.userinfo) {

          $window.localStorage.oauth = e.data.oauth;
          $window.localStorage.username = auth.userinfo.name;
          $window.localStorage.user_id = auth.userinfo.id;
          $window.localStorage.extswitch = auth.userinfo.extension_switch;
          console.log('\'Allo \'Allo! Popup');
        }
        console.log('nope');
      };
    }
  });



