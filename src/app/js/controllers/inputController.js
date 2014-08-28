angular.module('MortgageAdviser')
    .controller('inputController', ['$scope', 'adviceService', 'twitterProfilingService',
        function($scope, adviceService, twitterProfilingService) {

            $scope.availableAmount = 10000;
            $scope.spendingAmount = 5000;
            $scope.interestRateMortgage = 4.2;
            $scope.interestRateSavings = 1.6;
            $scope.adviceResult = "";

            twitterProfilingService.determineTravelProfile().then(
                function onSuccess(profile) {
                    if (profile == 'high') {
                        $scope.spendingAmount /= 0.1;
                    }
                }
            );

            $scope.createAdvice = function () {
                adviceService.createAdvice([$scope.spendingAmount, $scope.availableAmount, $scope.interestRateMortgage, $scope.interestRateSavings]).then(
                    function onSuccess(advice) {
                        $scope.adviceResult = JSON.stringify(advice);
                    }
                );
            };
        }
    ]);

