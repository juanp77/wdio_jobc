const { Given, When, Then } = require('@cucumber/cucumber')

const homePage = require('../pageobjects/home.page')
const contactUsPage = require('../pageobjects/contactUs.page')

/* When(/^I enter an invalid Email and submit (.*)$/, async (email) => {
    await contactUsPage.setEmail(email)
    await contactUsPage.clickOnSendBtn()
}) 

Then(/^I should see an alert$/, async () => {
    await contactUsPage.getDangerAlert()
})

When(/^I enter a valid Email amd submit (.*)$/, async (email) => {
    //await contactUsPage.emailInput.clearValue()
    await contactUsPage.clearEmailInput()
    await contactUsPage.setEmail(email)
    await browser.pause(15000)
    await contactUsPage.clickOnSendBtn()
}) 

Then(/^I Should see an alert for message$/, async () => {
    await contactUsPage.getDangerAlertForMessage()
}) */


/**When  <valid_email>
        Then I Should see an alert for message
        Then I enter a valid Order reference <order>
        
        Then I enter a message <message>
        When I Click on Send button
        Then I should see a succesull message  */




        /* 


Then(/^$/, async () => {
    
})

When(/^$/, async () => {
    
}) */