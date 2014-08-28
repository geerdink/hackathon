angular.module('MortgageAdviser')
    .controller('inputController', ['$scope', 'adviceService', 'twitterProfilingService',
        function($scope, adviceService, twitterProfilingService) {

            $scope.availableAmount = 10000;
            $scope.spendingAmount = 5000;

            twitterProfilingService.determineTravelProfile().then(
                function onSuccess(profile) {
                    if (profile == 'high') {
                        $scope.spendingAmount /= 0.1;
                    }
                }
            );

            $scope.createAdvice = function () {
                adviceService.createAdvice($scope.spendingAmount).then(
                    function onSuccess(advice) {
                        $scope.adviceResult = advice;
                    }
                );
            };

        }
    ]
);
