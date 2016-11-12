/**
 * Created by SIF 2088 on 11/12/2016.
 */
'use strict';
angular.module('uiGenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/signin/signin.html',
      })
  });