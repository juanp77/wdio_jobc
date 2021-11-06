Feature: Send a successful message

    Scenario Outline: Should send a successful message
        Given I am on Home page
        Then I wait 3 seconds
        When I click on Contact us button
        Then I should see the url <url>
        Then I should see the contact title <title>
        When I select a Subject Heading <subject>
        Then I should see a description 
        When I enter a valid Email <email>
        
        Then I enter a valid Order reference <order>
        
        Then I enter a message <message>
        When I Click on Send button
        Then I should see a succesull message 
        

        Examples:
            | url                                                        | title                         | subject          | email               | order  | message                    |
            | http://automationpractice.com/index.php?controller=contact | CUSTOMER SERVICE - CONTACT US | Customer service | testemail@gmail.com | 123456 | This is a test for message |