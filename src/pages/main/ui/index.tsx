import { useState } from 'react';

import { Form, Link } from 'src/shared/ui';
import { Header } from 'src/widgets/header';
import { ClearInput, PasswordInput } from 'src/features/inputs';

export const MainPage = () => {
    const [phone, setPhone] = useState<string>('');
    const [phoneError, setPhoneError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const handleErrorPhone = (): void => {
        if (phone.length >= 8) {
            setPhoneError('');
        } else {
            setPhoneError('Введите, пожалуйста, валидный номер телефона');
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
                    placeholder='Номер телефона'
                    value={phone}
                    setValue={setPhone}
                    error={phoneError}
                    onBlur={handleErrorPhone}
                />
                <PasswordInput
                    value={password}
                    setValue={setPassword}
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
