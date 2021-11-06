const Page = require('./page')

class HomePage extends Page {

    get contactUsTabBtn() { return $("[title='Contact Us']") }

    /**Navbar */
    async clickOnContactTabBtn(){
        await this.contactUsTabBtn.waitForDisplayed();
        return await this.contactUsTabBtn.click();
    }
}

module.exports = new HomePage();