const { Given, When, Then } = require('@cucumber/cucumber')

const homePage = require('../pageobjects/home.page')
const contactUsPage = require('../pageobjects/contactUs.page')

Given(/^I am on Home page$/, async () => {
    await browser.url('http://automationpractice.com')
})

Then(/^I wait 3 seconds$/, async () => {
    await browser.pause(3000)
})


When(/^I click on Contact us button$/, async () => {
    await homePage.clickOnContactTabBtn()
})


Then(/^I should see the url (.*)$/, async (url) => {
    await contactUsPage.isTitleVisible()
    await expect(browser).toHaveUrl(url)
})

Then(/^I should see the contact title (.*)$/, async (title) => {
    await contactUsPage.isTitleVisible()
    await expect(contactUsPage.contactTitleForm).toHaveText(title)
})

When(/^I select a Subject Heading (.*)$/, async (subject) => {
    await contactUsPage.selectSubject(subject)
}) 

Then(/^I should see a description$/, async () => {
    await contactUsPage.IsSubjectDescVisible()
     
})


When(/^I enter a valid Email (.*)$/, async (email) => {
    await contactUsPage.setEmail(email)
}) 

/* Then(/^I should see the email field has the validate check$/, async () => {
    await contactUsPage.veryfyEmailCheck()
}) */

Then(/^I enter a valid Order reference (.*)$/, async (order) => {
    await contactUsPage.setOrder()
})

/* Then(/^I upload the file$/, async () => {
    await contactUsPage.setChooseFile()
}) */

Then(/^I enter a message (.*)$/, async (message) => {
    await contactUsPage.setMessage(message)
})

When(/^I Click on Send button$/, async () => {
    await contactUsPage.clickOnSendBtn()
}) 

Then(/^I should see a succesull message$/, async () => {
    await contactUsPage.getSuccessAlert()
})

/**Invalid form */
When(/^I enter an invalid Email and submit (.*)$/, async (email) => {
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
})




/* 
        
        
        
        When  <email>
        *Then I should see the email field has the validate check
        Then <order>
        Then I upload the file
        Then I enter a message <message>
        When I Click on Send button
        Then I should see a succesull message  */










