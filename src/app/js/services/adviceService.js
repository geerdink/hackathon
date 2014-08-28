'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', 'predictionService', function($resource, predictionService){

        function createAdvice(inputData) {
            return predictionService.predict("mortgagedata", inputData).then(
                function onSuccess(prediction) {
                    return prediction.outputLabel;
                }
            );
        }

        return {
            createAdvice: createAdvice
        }
    }]);
