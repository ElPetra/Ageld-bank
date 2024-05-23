import { expect } from '@wdio/globals';

import {
    ALREADY_BANK_CLIENT,
    NOT_BANK_CLIENT,
    TOO_FEW_NUMBERS,
    newUserValidPhone,
    notBankClientPhone,
    notValidUserPhone
} from '../mocks/phone.js';
import {
    PASSWORDS_NOT_EQUAL,
    PasswordRequirements,
    newUserPassword,
    userPassword
} from '../mocks/password.js';
import { NOT_VALID_CODE } from '../mocks/smsCode.js';
import SignUpPage from '../pageobjects/auth/signup.page.js';

describe('signUp test', () => {
    beforeEach(async () => await SignUpPage.open());

    it('should exist error with too short phone', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(notValidUserPhone);
        await expect(SignUpPage.inputError).toBeExisting();
    });

    it(`error with too short phone should be: ${TOO_FEW_NUMBERS}`, async () => {
        await SignUpPage.enterPhoneAndConfirmRules(notValidUserPhone);
        await expect(await SignUpPage.inputError.getText()).toBe(
            TOO_FEW_NUMBERS
        );
    });
    it('submit button should be disabled with invalid phone', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(notValidUserPhone);
        await expect(await SignUpPage.submitBtn.getAttribute('disabled')).toBe(
            'true'
        );
    });
    it('submit button should be disabled until user confirm rules and privacy policy', async () => {
        await SignUpPage.enterPhone();
        await expect(await SignUpPage.submitBtn).toBeDisabled();
    });
    it(`error with already registered phone should be: ${ALREADY_BANK_CLIENT}`, async () => {
        await SignUpPage.enterPhoneAndConfirmRules();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await expect(await SignUpPage.inputError.getText()).toBe(
            ALREADY_BANK_CLIENT
        );
    });
    it(`error with not registered phone should be: ${NOT_BANK_CLIENT}`, async () => {
        await SignUpPage.enterPhoneAndConfirmRules(notBankClientPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await expect(await SignUpPage.inputError.getText()).toBe(
            NOT_BANK_CLIENT
        );
    });

    it('should exist codeInputs', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await expect(SignUpPage.codeInputs[0]).toBeExisting();
    });
    it('should exist error with invalid sms code', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCodeWithError();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await expect(await SignUpPage.codeInputError).toBeExisting();
    });

    it(`error with invalid sms code should be: ${NOT_VALID_CODE}`, async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCodeWithError();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await expect(await SignUpPage.codeInputError).toBeExisting();
        await expect(await SignUpPage.codeInputError.getText()).toBe(
            NOT_VALID_CODE
        );
    });

    it('should exist password requirmennts on focus input', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.passwordInput.click();
        await expect(SignUpPage.lengthRequirement).toBeExisting();
    });

    it('password input should exists capital and lower case letters', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(
            PasswordRequirements.capitalAndLowerLetters.invalid
        );
        await expect(
            await SignUpPage.checkIsViolated(
                SignUpPage.existsAllRegistersRequirement
            )
        ).toBeExisting();
        await SignUpPage.enterPassword(
            PasswordRequirements.capitalAndLowerLetters.correct
        );
        await expect(
            await SignUpPage.checkIsComplied(
                SignUpPage.existsAllRegistersRequirement
            )
        ).toBeExisting();
    });
    it('password input length should be 5-20 symbols', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(PasswordRequirements.fromLength.invalid);
        await expect(
            await SignUpPage.checkIsViolated(SignUpPage.lengthRequirement)
        ).toBeExisting();
        await SignUpPage.enterPassword(PasswordRequirements.fromLength.correct);
        await expect(
            await SignUpPage.checkIsComplied(SignUpPage.lengthRequirement)
        ).toBeExisting();
        await SignUpPage.enterPassword(PasswordRequirements.toLength.invalid);
        await expect(
            await SignUpPage.checkIsViolated(SignUpPage.lengthRequirement)
        ).toBeExisting();
        await SignUpPage.enterPassword(PasswordRequirements.toLength.correct);
        await expect(
            await SignUpPage.checkIsComplied(SignUpPage.lengthRequirement)
        ).toBeExisting();
    });
    it('password input should exists digit', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(PasswordRequirements.digits.invalid);
        await expect(
            await SignUpPage.checkIsViolated(SignUpPage.existsDigitRequirement)
        ).toBeExisting();
        await SignUpPage.enterPassword(PasswordRequirements.digits.correct);
        await expect(
            await SignUpPage.checkIsComplied(SignUpPage.existsDigitRequirement)
        ).toBeExisting();
    });
    it('password input should exists special symbol', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(PasswordRequirements.symbols.invalid);
        await expect(
            await SignUpPage.checkIsViolated(SignUpPage.existsSymbolRequirement)
        ).toBeExisting();
        await SignUpPage.enterPassword(PasswordRequirements.symbols.correct);
        await expect(
            await SignUpPage.checkIsComplied(SignUpPage.existsDigitRequirement)
        ).toBeExisting();
    });
    it('password input should exists only permitted symbols', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(
            PasswordRequirements.permittedSymbols.invalid
        );
        await expect(
            await SignUpPage.checkIsViolated(
                SignUpPage.onlyPermittedRequirement
            )
        ).toBeExisting();
        await SignUpPage.enterPassword(
            PasswordRequirements.permittedSymbols.correct
        );
        await expect(
            await SignUpPage.checkIsComplied(
                SignUpPage.onlyPermittedRequirement
            )
        ).toBeExisting();
    });
    it('should exist error if password input not equal to repeat password input', async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(newUserPassword);
        await SignUpPage.enterRepeatPassword(userPassword);
        await SignUpPage.submitBtn.click();
        await expect(await SignUpPage.inputError).toBeDisplayed();
    });
    it(`error if password input not equal to repeat password input should be: ${PASSWORDS_NOT_EQUAL}`, async () => {
        await SignUpPage.enterPhoneAndConfirmRules(newUserValidPhone);
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterCode();
        await expect(await SignUpPage.submitBtn).toBeEnabled();
        await SignUpPage.submitBtn.click();
        await SignUpPage.enterPassword(newUserPassword);
        await SignUpPage.enterRepeatPassword(userPassword);
        await SignUpPage.submitBtn.click();
        await expect(await SignUpPage.inputError.getText()).toBe(
            PASSWORDS_NOT_EQUAL
        );
    });

    it('should login with valid credentials', async () => {
        await SignUpPage.signUp();
        await expect(SignUpPage.successMessageCardText).toBeExisting();
        await expect(
            await SignUpPage.successMessageCardText.$('div.text').getText()
        ).toBe('Кабинет пользователя успешно \n зарегистрирован');
    });
});
