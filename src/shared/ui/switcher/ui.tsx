import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setLanguage } from 'src/app/store/slice/languageSlice';

export const Switcher = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        dispatch(setLanguage(lng));
    };

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>
        </div>
    );
};
