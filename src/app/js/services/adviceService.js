'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', 'predictionService', function($resource, predictionService){

        function createAdvice(spendingAmount) {
            return predictionService.predict("test1234", [spendingAmount]).then(
                function onSuccess(prediction) {
                    return prediction.outputLabel;
                }
            )
        }

        return {
            createAdvice: createAdvice
        }
    }]);
