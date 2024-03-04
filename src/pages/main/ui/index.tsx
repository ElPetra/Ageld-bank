import { useState } from 'react';

import { Form, Link } from 'src/shared/ui';
import { Header } from 'src/widgets/header';
import { ClearInput, PasswordInput } from 'src/features/inputs';

import type { ChangeEvent } from 'react';

export const MainPage = () => {
    const [phone, setPhone] = useState<string>('');
    const [phoneLabel, setPhoneLabel] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordLabel, setPasswordLabel] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>): void => {
        setPhone(e.target.value);
        if (e.target.value === '') {
            setPhoneLabel('');
        } else {
            setPhoneLabel('Номер телефона');
        }
    };

    const handleErrorPhone = (): void => {
        if (phone.length >= 8) {
            setPhoneError('');
        } else {
            setPhoneError('Введите, пожалуйста, валидный номер телефона');
        }
    };

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
        if (e.target.value === '') {
            setPasswordLabel('');
        } else {
            setPasswordLabel('Пароль');
        }
    };

    const handleErrorPassword = (): void => {
        if (password.length >= 8) {
            setPasswordError('');
        } else {
            setPasswordError('Пароль должен состоять из 8 символов или более');
        }
    };

    return (
        <div>
            <Header />
            <Form>
                <ClearInput
                    type='tel'
                    pattern='\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}'
                    placeholder='Номер телефона'
                    value={phone}
                    setValue={setPhone}
                    label={phoneLabel}
                    setLabel={setPhoneLabel}
                    onChange={handleChangePhone}
                    error={phoneError}
                    onBlur={handleErrorPhone}
                />
                <PasswordInput
                    value={password}
                    label={passwordLabel}
                    onChange={handleChangePassword}
                    error={passwordError}
                    onBlur={handleErrorPassword}
                />
            </Form>
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
        </div>
    );
};
