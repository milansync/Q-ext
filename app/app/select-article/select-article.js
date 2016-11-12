/**
 * Created by SIF 2088 on 11/12/2016.
 */
'use strict';

angular.module('uiGenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('select-article', {
        url: '/select-article',
        templateUrl: 'app/select-article/select-article.html',
        controller : 'AllotedToNewController',
        controllerAs : 'AllotedToNew'
      })
  });