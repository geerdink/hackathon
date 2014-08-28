angular.module('MortgageAdviser')
    .controller('AdviceController', ['$scope', function($scope) {

        $scope.adviceTest = "Hello advice!";
        $scope.resultAvailable = true;
        $scope.toggleCustom = function() {
            $scope.resultAvailable = $scope.resultAvailable === false ? true: false;
        };
    }]
);
