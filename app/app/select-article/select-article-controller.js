/**
 * Created by SIF 2088 on 11/12/2016.
 */
angular.module('uiGenApp')
  .controller('AllotedToNewController', function AllotedToNewCtrl($http, $state) {
    var vm = this;

    vm.tags=[];

    vm.selectedIndustry=function(data){
              vm.tags=data.tags;
    }

    $http({
      method: 'GET',
      url: 'http://54.164.85.236:7777/onboarding/getAllIndustries',
      headers: {
        'Apikey': 'baby@qiosk'
      }
    }).then(function(response){
        console.log(response);
        if(response.data.hasOwnProperty('allIndustries')){
          vm.industry=response.data.allIndustries;
        }
    });


  });