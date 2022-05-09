var request = require('request')

request.post(
    'http://localhost:4646',
    { json: {"position": "0,0,0", "fps": 120, "fpsLock": true}} , 
    function (error, response, body) {
        if(!error && response.statusCode == 200) {
            console.log(body)
        }
        if(error) {
            console.log(response.statusCode + ". " + response.body)
        }
    }
)