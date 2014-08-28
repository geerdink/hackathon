angular.module('MortgageAdviser')
    .controller('inputController', ['$scope', 'adviceService', function($scope, adviceService) {

        $scope.availableAmount = 10000;
        $scope.spendingAmount = 0;

        $scope.createAdvice = function(){
            adviceService.createAdvice().then(
                function onSuccess(response) {
                    $scope.adviceResult = response;
                },
                function onFailure() {

                }
            )
        };

    }]
);
