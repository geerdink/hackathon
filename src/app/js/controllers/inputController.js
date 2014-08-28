angular.module('MortgageAdviser')
    .controller('inputController', ['$scope', 'adviceService', function($scope, adviceService) {

        $scope.availableAmount = 10000;
        $scope.spendingAmount = 0;

        $scope.createAdvice = function(){

            function onSuccess(response) {
                alert(JSON.stringify(response));
                $scope.adviceResult = response;
            }

            adviceService.createAdvice($scope.spendingAmount, $scope.availableAmount, onSuccess);

        };

    }]
);
