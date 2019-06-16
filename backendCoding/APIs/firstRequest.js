var request = require("request");
request("http://google.com", function(err, res, body){
if(!error && res.statusCode == 200){
console.log(body)
}
})