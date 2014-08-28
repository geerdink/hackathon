'use strict';

/* Services */

var adviceServices = angular.module('MortgageAdviser');

adviceServices.factory('AdviceService', ['$resource',
    function($resource){
        var url = '/advice';

        return $resource(url, {}, {
            createAdvice: {method:'POST'}
        });
    }]);
