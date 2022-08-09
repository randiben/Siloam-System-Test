Feature: Test View and Export

Scenario: login sebagai admin
Given user berada di halaman login 
When user input valid username dan password
And click login
Then user berada di dashboard admin
