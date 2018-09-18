Feature: Url Access success 

    This feature check  whether the user had access to URL

Scenario: Verify top stories JSON schema
  When I send a GET request to "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  Then the response status should be 200