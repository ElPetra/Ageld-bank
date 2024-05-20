import AuthPage from './auth.page.js';

class SignInPage extends AuthPage {

    public async signIn () {
        await this.enterPhone()
        await this.submitBtn.click();
        await this.enterCode()
        await this.submitBtn.click()
        await this.enterPassword()
        await this.submitBtn.click()
    }

    public open () {
        return super.open('/signin');
    }
}

export default new SignInPage()
