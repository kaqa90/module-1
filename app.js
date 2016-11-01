(function () {
	'use strict';

	angular.module('module1App',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController ($scope){
		$scope.dishes = '';
		$scope.txtMsg = '';
		$scope.fontColor = {};
		$scope.boxColor = {};

		$scope.checkItems = function () {

			if($scope.dishes !== '') {
				var count = $scope.dishes.split(',').length;
				if(count > 0){
					if(count <= 3){
						$scope.txtMsg = 'Enjoy your Dishes';
					}
					else if(count > 3){
						$scope.txtMsg = 'Too much Dishes'
					}
					$scope.fontColor= {
						"color":"green"
					};
					$scope.boxColor = {
						"border-color":"green"
					};
				}
				else {
					enterItems();
				}
			}
			else {
				enterItems();
			}
		}
		var enterItems = function() {
			$scope.txtMsg = 'Please enter data first';
				$scope.fontColor = {
					"color":"red"
				};
				$scope.boxColor = {
					"border-color":"red"
				};
		};
	}
})();
