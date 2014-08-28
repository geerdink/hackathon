'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', 'predictionService', function($resource, predictionService){

        function createAdvice(spendingAmount, availableAmount, callback) {
            predictionService.predict("mortgagedata", [spendingAmount, availableAmount, 1.0, 3.0], callback);
        }

        return {
            createAdvice: createAdvice
        };
    }]);
