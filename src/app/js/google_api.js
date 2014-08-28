var gapi_data = {
	inputValues: [],
	outputValues: {}
};

function call_gapi() {
	gapi_data.inputValues = [ document.getElementById('input').value ];
	
	handleClientLoad();
}

// Enter a client ID for a web application from the Google Developer Console.
      // The provided clientId will only work if the sample is run directly from
      // https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
      // In your Developer Console project, add a JavaScript origin that corresponds to the domain
      // where you will be running the script.
      var clientId = '253060209883-tvd1u02vhpbj1c1ooqrtaogjqj99p58o.apps.googleusercontent.com';

      // Enter the API key from the Google Develoepr Console - to handle any unauthenticated
      // requests in the code.
      // The provided key works for this sample only when run from
      // https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
      // To use in your own application, replace this API key with your own.
      var apiKey = 'AIzaSyDI6qXzvhzjordz7FmsOn1b6tT_X9eY1Bs';

      // To enter one or more authentication scopes, refer to the documentation for the API.
      var scopes = 'https://www.googleapis.com/auth/prediction';

      // Use a button to handle authentication the first time.
      function handleClientLoad() {
        gapi.client.setApiKey(apiKey);
        window.setTimeout(checkAuth,1);
      }

      function checkAuth() {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
      }


      function handleAuthResult(authResult) {
        var authorizeButton = document.getElementById('authorize-button');
        if (authResult && !authResult.error) {
          authorizeButton.style.visibility = 'hidden';
          makeApiCall();
        } else {
          authorizeButton.style.visibility = '';
          authorizeButton.onclick = handleAuthClick;
        }
      }

      function handleAuthClick(event) {
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
      }

      // Load the API and make an API call.  Display the results on the screen.
      function makeApiCall() {
      	var inputString = document.getElementById('input');

        gapi.client.load('prediction', 'v1.6', function() {
          var request = gapi.client.prediction.trainedmodels.predict({
          	"id": "test1234",
          	"project": "disco-rope-684",
             "input": {"csvInstance": gapi_data.inputValues }  
            });
          request.execute(function(resp) {
          	gapi_data.outputValues = resp;
          	
            var heading = document.createElement('h4');
            heading.appendChild(document.createTextNode(JSON.stringify(resp)));

            document.getElementById('content').appendChild(heading);
          });
        });
      }
      
