import { useState } from 'react';

import { Link } from 'src/shared/ui';
import { Header } from 'src/widgets/header';
import { PasswordInput } from 'src/features/inputs';

import type { ChangeEvent } from 'react';

export const MainPage = () => {
    const [password, setPassword] = useState<string>('');
    const [passwordLabel, setPasswordLabel] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

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
            <PasswordInput
                label={passwordLabel}
                onChange={handleChangePassword}
                error={passwordError}
                onBlur={handleErrorPassword}
            />
            <Link to={'/auth'}>Auth</Link>
            <br />
            Главная
        </div>
    );
};
