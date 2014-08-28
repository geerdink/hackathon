'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', 'predictionService', function($resource, predictionService){

        function createAdvice(spendingAmount, callback) {
            predictionService.predict("test1234", [spendingAmount], callback);
        }

        return {
            createAdvice: createAdvice
        }
    }]);
