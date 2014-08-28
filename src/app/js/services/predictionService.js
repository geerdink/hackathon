'use strict';

angular.module('MortgageAdviser')
    .factory('predictionService', ['$q', function($q) {

        var clientId = '253060209883-tvd1u02vhpbj1c1ooqrtaogjqj99p58o.apps.googleusercontent.com';
        var apiKey = 'AIzaSyDI6qXzvhzjordz7FmsOn1b6tT_X9eY1Bs';
        var scopes = 'https://www.googleapis.com/auth/prediction';

        return {
            predict: function(id, inputValues) {
                var deferred = $q.defer();

                var checkAuth = function () {
                    gapi.client.setApiKey(apiKey);
                    gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true }, handleAuthResult);
                };

                var handleAuthResult = function(authResult) {
                    if (authResult && !authResult.error) {
                        predict();
                    } else {
                        gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: false }, handleAuthResult);
                    }
                };

                var predict = function () {
                    gapi.client.load('prediction', 'v1.6', function() {
                        var request = gapi.client.prediction.trainedmodels.predict({
                            id: id,
                            project: "disco-rope-684",
                            input: {
                                csvInstance: inputValues
                            }
                        });
                        request.execute(deferred.resolve);
                    });
                };

                window.setTimeout(checkAuth, 100);
                return deferred.promise;
            }
        }
    }]);


