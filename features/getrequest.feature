Feature: CRUD API testing

    This feature check  whether the user had access to URL

Scenario: Verify GET URL
  When I send a GET request to "https://jsonplaceholder.typicode.com/posts/1"
  Then the response status should be 201
