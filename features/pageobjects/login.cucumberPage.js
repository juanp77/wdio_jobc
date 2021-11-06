const Page = require('./page')

class LoginCucumberPage extends Page {

    get cucumberPageTitle() { return $(".page__heading") }

    get user() { return $("[name='user[email]']") }
    get password() { return $("[name='user[password]']") }

    async isTitleVisible() {
        return await this.cucumberPageTitle.waitForDisplayed()
    }

    async loginCucumberPage(user, password) {
        await console.log('entro user')
        await this.password.setValue(password)
        await this.user.setValue(user)
        
    }

}

module.exports = new LoginCucumberPage();