var {Then, When} = require('cucumber');
var assert = require('assert');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

let resp;

When('I send a GET request to {string}', function (string,callback) {
        // Write code here that turns the phrase above into concrete actions
        fetch(string,{ agent:new HttpsProxyAgent('http://165.225.104.34:9480')})
                .then(res=>{
                    resp = res.status;
                    callback();
                });
        
        
    
  });
// Synchronous

Then(/^the response status should be (.*)$/, function (status) {
        assert.equal(resp, parseInt(status));
 

    
});
