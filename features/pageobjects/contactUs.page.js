const Page = require('./page')
const path = require('path');

class ContactPage extends Page {

    get contactTitleForm() { return $(".page-heading") }
    get subject() { return $("#id_contact") }
    get subjectDesc() { return $("//p[contains(.,'For any question about a product, an order')]") }
    get emailInput() { return $("#email") }
    get checkEmail() { return $("[class='form-group']") }
    get orderInput() { return $("#id_order") }
    get chooseFile() { return $(".action") }
    get messageInput(){return $("#message") }
    get sendButton (){return $("#submitMessage")}

    get alertSuccess(){return $(".alert")}
    get alertWarning(){return $(".alert-danger >p")}
    get alertWarningBlankMessage (){return $(".alert-danger >ol >li")}

    async isTitleVisible() {
        return await this.contactTitleForm.waitForDisplayed()
    }
    async getContactTitle() {
        let title = 'CUSTOMER SERVICE - CONTACT US'
        return await this.contactTitleForm.getText()

    }

    async selectSubject(option) {
        return await this.subject.selectByVisibleText(option)

    }

    async IsSubjectDescVisible() {
        return await this.subjectDesc.isDisplayed()
    }

    async setEmail(email) {
        await this.emailInput.setValue(email)

    }
    async clearEmailInput(){
        console.log('value 1: '+this.emailInput.getValue())
        await this.emailInput.clearValue()
        console.log('value 2: '+this.emailInput.getValue())
    }

    async veryfyEmailCheck() {
        await expect(this.emailInput).toHaveElementClass('form-ok')
    }

    async setOrder(order) {
        await this.orderInput.setValue(order)
    }

    async setChooseFile() {
       
        const filePath = path.join(__dirname, '../img/img1.png')
        const remoteFilePath = await browser.uploadFile(filePath)
        console.log('acaaaaaa: '+ remoteFilePath)
        await this.chooseFile.setValue(remoteFilePath)
        await browser.pause(10000)
        
    }

    async setMessage(message){
        await this.messageInput.setValue(message)
    }

    async clickOnSendBtn(){
        await this.sendButton.click()
    }

    async getSuccessAlert(){
        let successMsg = 'Your message has been successfully sent to our team.'
        
        await this.alertSuccess.waitForDisplayed()
        let messageText = await this.alertSuccess.getText()
        return await messageText === successMsg

    }

    async getDangerAlert(){
        let warningTxt = 'There is 1 error'
        await this.alertWarning.waitForDisplayed()
        await expect(this.alertWarning).toHaveText(warningTxt)

    }

    async getDangerAlertForMessage(){
        let warningMsgTxt = 'The message cannot be blank.'
        await this.alertWarning.waitForDisplayed()
        await expect(this.alertWarningBlankMessage).toHaveText(warningMsgTxt)
    }





}

module.exports = new ContactPage();