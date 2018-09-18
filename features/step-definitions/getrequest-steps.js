var {Then, When} = require('cucumber');
var assert = require('assert');
const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');

let resp;

When('I send a GET request to {string}', function (string) {
        // Write code here that turns the phrase above into concrete actions
        resp =  fetch(string,{ agent:new HttpsProxyAgent('http://165.225.104.34:9480')}).then();
        
    
  });
// Synchronous

Then(/^the response status should be (.*)$/, function (status) {
    resp.then(res => {
        assert.equal(res.status, parseInt(status));
    });

    
});
