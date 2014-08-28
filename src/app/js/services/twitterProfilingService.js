'use strict';

angular.module('MortgageAdviser')
    .factory('twitterProfilingService', ['$resource', 'predictionService', function($resource, predictionService){

        var resource = $resource('data/tweets.json', {}, {
            query: {
                method: 'GET'
            }
        });

        function determineTravelProfile() {
            var tweets = resource.query();

            return predictionService.predict("test12git 34", tweets).then(
                function onSuccess(prediction) {
                    return prediction.outputLabel;
                }
            )
        }

        return {
            determineTravelProfile: determineTravelProfile
        }
    }]);
