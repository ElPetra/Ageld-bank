import { $} from '@wdio/globals'


import { userPassword } from '../../mocks/password.js';
import { registeredUserPhone } from '../../mocks/phone.js';

import Page from '../page.js';

export default class AuthPage extends Page {
    
    public get inputPhone () {
        return $('input[name="phone"]');
    }
    public get codeInputs(){
       return [$('input[name="code.0"]'),$('input[name="code.1"]'),$('input[name="code.2"]'),$('input[name="code.3"]'),$('input[name="code.4"]'),$('input[name="code.5"]')]
    }
    public get inputPassword () {
        return $('input[name="password"]');
    }
    public get inputError () {
        return $('.input-error');
    }
    public get codeInputError () {
        return $('.code-input__error');
    }
    
    public get submitBtn () {
        return $('button[type="submit"]');
    }

    public get privateNavButtons () {
        return $('.navigation__additional');
    }
    public get logoutBtn () {
        return $('.navigation__additional').$('button')
    }

    public async enterPhone (phone: string=registeredUserPhone) {
        await this.inputPhone.setValue(phone);
    }
    public async enterCode () {
        for(let i = 0;i< (await this.codeInputs.length);i++){
            await this.codeInputs[i].setValue(i+1)
        }
    }
    public async enterCodeWithError () {
        for(let i = 0;i< (await this.codeInputs.length);i++){
            await this.codeInputs[i].setValue(5)
        }
    }

    public async enterPassword (password: string=userPassword) {
        await this.inputPassword.setValue(password);
    }
    public async signIn () {
        await this.enterPhone()
        await this.submitBtn.click();
        await this.enterCode()
        await this.submitBtn.click()
        await this.enterPassword()
        await this.submitBtn.click()
    }

    public open (url:string) {
        return super.open(url);
    }
}

