const { Given, When, Then } = require('@cucumber/cucumber')


const LoginCucumberPage = require('../pageobjects/login.cucumberPage')


Given(/^I am on Login page$/, async () => {
    await browser.url('https://school.cucumber.io/users/sign_in')
})

Then(/^I wait 3 seconds$/, async () => {
    await browser.pause(3000)
})

Then(/^I see the title of the page$/, async () => {
    //await $(".page__heading").waitForDisplayed()
    await LoginCucumberPage.isTitleVisible()
    await expect(browser).toHaveUrl('https://school.cucumber.io/users/sign_in')
    await console.log('Pasoooooo')
})

When(/^I set values for (.*) and (.*)$/, async (user, password) => {
    await LoginCucumberPage.loginCucumberPage(user, password)
    await browser.pause(5000)
}) 