Feature: Validate inputs

    Scenario Outline: Contact from should validate invalid inputs
        Given I am on Home page
        Then I wait 3 seconds
        When I click on Contact us button
        Then I should see the url <url>
        Then I should see the contact title <title>
        When I enter an invalid Email and submit <email>
        Then I should see an alert
        When I enter a valid Email amd submit <valid_email>
        Then I Should see an alert for message
        
        

        Examples:
            | url                                                        | title                         | subject          | email      | valid_email          | 
            | http://automationpractice.com/index.php?controller=contact | CUSTOMER SERVICE - CONTACT US | Customer service | testemail@ | validemail@gmail.com | 