angular.module('MortgageAdviser')
    .controller('inputController', ['$scope', 'adviceService', function($scope, adviceService) {

        $scope.availableAmount = 10000;
        $scope.spendingAmount = 0;
        $scope.interestRateMortgage = 4.2;
        $scope.interestRateSavings = 1.6;
        //$scope.adviceResult = "";

        $scope.createAdvice = function(){

            function onSuccess(response) {
                $scope.adviceResult = JSON.stringify(response);
	            $scope.$digest();
            }

            adviceService.createAdvice([$scope.spendingAmount, $scope.availableAmount, $scope.interestRateMortgage, $scope.interestRateSavings], onSuccess);

        };

    }]
);
