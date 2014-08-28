'use strict';

angular.module('MortgageAdviser')
    .factory('adviceService', ['$resource', function($resource){
        var url = '/api/advice';

//        return $resource(url, {}, {
//            createAdvice: {method:'POST'}
//        });

        var mockOutput = {
            "kind": "prediction#output",
            "id": "test1234",
            "selfLink": "https://www.googleapis.com/prediction/v1.6/projects/disco-rope-684/trainedmodels/test1234/predict",
            "outputLabel": "Sparen",
            "outputMulti": [
                {
                    "label": "Aflossen",
                    "score": "2.500000"
                },
                {
                    "label": "Sparen",
                    "score": "6.000000"
                },
                {
                    "label": "Beleggen",
                    "score": "1.500000"
                }
            ]
        };


        return {
            createAdvice: function(data) {
                return {
                    then: function (onSuccess, onFailure) {
                        onSuccess(mockOutput.outputLabel);
                        onFailure();
                    }
                }
            }
        }


    }]);
