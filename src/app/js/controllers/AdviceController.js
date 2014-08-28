angular.module('MortgageAdviser')
    .controller('adviceController', ['$scope', function($scope) {

        $scope.adviceTest = "Hello advice!";
        $scope.resultAvailable = true;
        $scope.toggleCustom = function() {
            $scope.resultAvailable = $scope.resultAvailable === false ? true: false;
        };
    }]
);
