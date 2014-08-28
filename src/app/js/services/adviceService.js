'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', 'predictionService', function($resource, predictionService){

        function createAdvice(inputData, callback) {
            predictionService.predict("mortgagedata", inputData, callback);
        }

        return {
            createAdvice: createAdvice
        };
    }]);
