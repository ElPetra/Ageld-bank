import { expect } from '@wdio/globals';

import {
    CLIENT_NOT_FOUND,
    TOO_FEW_NUMBERS,
    notBankClientPhone,
    notValidUserPhone
} from '../mocks/phone.js';
import {
    NOT_USER_PASSWORD,
    NOT_VALID_PASSWORD,
    errorInvalidUserPassword,
    errorNotUserPassword
} from '../mocks/password.js';
import { NOT_VALID_CODE } from '../mocks/smsCode.js';
import SignInPage from '../pageobjects/auth/signin.page.js';

describe('signIn test', () => {
    beforeEach(async () => await SignInPage.open());

    it('should exist error with invalid phone', async () => {
        await SignInPage.enterPhone(notValidUserPhone);
        await expect(SignInPage.inputError).toBeExisting();
    });

    it(`error with too short phone should be: ${TOO_FEW_NUMBERS}`, async () => {
        await SignInPage.enterPhone(notValidUserPhone);
        await expect(await SignInPage.inputError.getText()).toBe(
            TOO_FEW_NUMBERS
        );
    });
    it(`error with not bank client phone should be: ${CLIENT_NOT_FOUND}`, async () => {
        await SignInPage.enterPhone(notBankClientPhone);
        await SignInPage.submitBtn.click();
        await expect(await SignInPage.inputError.getText()).toBe(
            CLIENT_NOT_FOUND
        );
    });

    it('submit button should be disabled with invalid phone', async () => {
        await SignInPage.enterPhone(notValidUserPhone);
        await expect(await SignInPage.submitBtn.getAttribute('disabled')).toBe(
            'true'
        );
    });

    it('should exist error with invalid sms code', async () => {
        await SignInPage.enterPhone();
        await SignInPage.submitBtn.click();
        await SignInPage.enterCodeWithError();
        await expect(await SignInPage.submitBtn).toBeEnabled();
        await SignInPage.submitBtn.click();
        await expect(await SignInPage.codeInputError).toBeExisting();
    });

    it(`error with invalid sms code should be: ${NOT_VALID_CODE}`, async () => {
        await SignInPage.enterPhone();
        await SignInPage.submitBtn.click();
        await SignInPage.enterCodeWithError();
        await expect(await SignInPage.submitBtn).toBeEnabled();
        await SignInPage.submitBtn.click();
        await expect(await SignInPage.codeInputError).toBeExisting();
        await expect(await SignInPage.codeInputError.getText()).toBe(
            NOT_VALID_CODE
        );
    });

    it('should exist error with invalid password', async () => {
        await SignInPage.enterPhone();
        await SignInPage.submitBtn.click();
        await SignInPage.enterCode();
        await SignInPage.submitBtn.click();
        await SignInPage.enterPassword(errorNotUserPassword);
        await SignInPage.submitBtn.click();
        await expect(SignInPage.inputError).toBeExisting();
    });

    it(`error with wrong password should be: ${NOT_USER_PASSWORD}`, async () => {
        await SignInPage.enterPhone();
        await SignInPage.submitBtn.click();
        await SignInPage.enterCode();
        await SignInPage.submitBtn.click();
        await SignInPage.enterPassword(errorNotUserPassword);
        await SignInPage.submitBtn.click();
        await expect(await SignInPage.inputError.getText()).toBe(
            NOT_USER_PASSWORD
        );
    });
    it(`error with invalid password should be: ${NOT_VALID_PASSWORD}`, async () => {
        await SignInPage.enterPhone();
        await SignInPage.submitBtn.click();
        await SignInPage.enterCode();
        await SignInPage.submitBtn.click();
        await SignInPage.enterPassword(errorInvalidUserPassword);
        await SignInPage.submitBtn.click();
        await expect(await SignInPage.inputError.getText()).toBe(
            NOT_VALID_PASSWORD
        );
    });
    it('should login with valid credentials', async () => {
        await SignInPage.signIn();
        await expect(await SignInPage.logoutBtn).toBeExisting();
    });
    it('should not exist private navigation block after logout', async () => {
        await SignInPage.signIn();
        await expect(SignInPage.privateNavButtons).toBeExisting();
        await SignInPage.logoutBtn.click();
        expect(
            (await SignInPage.logoutBtn).waitForExist({
                timeout: 500,
                reverse: true
            })
        );
    });
});
