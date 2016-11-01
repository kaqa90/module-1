(function () {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.dishes = '';
		$scope.txtMsg = '';
		$scope.fontStyle = {};
		$scope.boxStyle = {};

		$scope.checkItems = function () {

			if($scope.dishes !== '') {
				var count = $scope.dishes.split(',').length;
				if(count > 0){
					if(count <=3){
						$scope.txtMsg = 'Enjoy your Dishes';
					}
					else if(count > 3){
						$scope.txtMsg = 'Too much Dishes'
					}
					$scope.fontStyle = {
						"color":"green"
					};
					$scope.boxStyle = {
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
				$scope.fontStyle = {
					"color":"red"
				};
				$scope.boxStyle = {
					"border-color":"red"
				};
		};
	}
})();
