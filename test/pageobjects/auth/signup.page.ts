import { newUserValidPhone } from '../../mocks/phone.js';

import { newUserPassword } from '../../mocks/password.js';

import { passwordRules } from '../../../src/features/inputs/password-input/password-requirements/model/passwordRules.js';


import AuthPage from './auth.page.js';

const requirments = Object.keys(passwordRules)

class SignUpPage extends AuthPage {

    public get successMessageCardText(){
        return $('.message-card__text')
    }
    public get serviceRulesAnchor(){
        return $('#service_rules')
    }
    public get privacyPolicyAnchor(){
        return $('#privacy_policy')
    }
    public get passwordRequirements(){
        return $('.password-requirements')
    }
    public get lengthRequirement(){
        return $(`div[data-testid="${requirments[0]}"]`)
    }
    public get existsAllRegistersRequirement(){
        return $(`div[data-testid="${requirments[1]}"]`)
    }
    public get existsDigitRequirement(){
        return $(`div[data-testid="${requirments[2]}"]`)
    }
    public get onlyPermittedRequirement(){
        return $(`div[data-testid="${requirments[3]}"]`)
    }
    public get existsSymbolRequirement(){
        return $(`div[data-testid="${requirments[4]}"]`)
    }
    public checkIsComplied(component:ChainablePromiseElement){
        return component.$('img[data-testid="success"]')
    }
    public checkIsViolated(component:ChainablePromiseElement){
        return component.$('img[data-testid="error"]')
    }
    public get passwordInput(){
        return $('input[name="password1"]')
    }
    public get repeatPasswordInput(){
        return $('input[name="password2"]')
    }
    public async enterPhoneAndConfirmRules(phone?: string){
        await super.enterPhone(phone)
        await this.privacyPolicyAnchor.click();
        await this.serviceRulesAnchor.click(); 
    }
    public async enterPassword (password: string=newUserPassword) {
        await this.passwordInput.setValue(password);
    }
    public async enterRepeatPassword (password: string=newUserPassword) {
        await this.repeatPasswordInput.setValue(password);
    }
    public async signUp () {
        await this.enterPhoneAndConfirmRules(newUserValidPhone);
        await this.submitBtn.click();
        await this.enterCode()
        await this.submitBtn.click()
        await this.enterPassword()
        await this.enterRepeatPassword()
        await this.submitBtn.click()
    }

    public open () {
        return super.open('/signup');
    }
}

export default new SignUpPage()
