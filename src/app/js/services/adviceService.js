'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', 'predictionService', function($resource, predictionService){

        function createAdvice(spendingAmount, callback) {
            predictionService.predict("mortgagedata", [spendingAmount, 10000, 1.0, 3.0], callback);
        }

        return {
            createAdvice: createAdvice
        };
    }]);
