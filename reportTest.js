// JavaScript Document
	
	
// Define the `dataElementModule` module
var dataElementModule = angular.module('dataElementModule', []);

// Define the `dataElementListController` controller on the `dataElementModule` module
dataElementModule.controller('dataElementListController', function dataElementListController($scope) {
  /*$scope.dataElements = [
    {
      name: 'DataElement1',
      domainType: 'dt1',
	  valueType: 'vt1',
	  categoryCombo: 'cc1',
	  lastUpdated: 'lu1'
    }, {
      name: 'DataElement2',
      domainType: 'dt2',
	  valueType:'vt2',
	  categoryCombo:'cc2',
	  lastUpdated:'lu2'
    }, {
      name: 'DataElement3',
      domainType: 'dt3',
	  valueType:'vt3',
	  categoryCombo:'cc3',
	  lastUpdated:'lu3'
    },
	  
  ];*/
	$scope.CurrentDate = new Date();
});	

