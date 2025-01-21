import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton } from 'src/features/multi-step-form';
import { useTranslation } from 'react-i18next';

import { GeneralQuestions } from './general-questions';
import { AboutCards } from './about-cards';
import { AboutCredits } from './about-credits';
import { AboutDeposits } from './about-deposits';
import { AboutInsurance } from './about-insurance';

import './style.scss';

export const AnswerAndQuestionPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [contentType, setContentType] = useState<string>('generalQuestions');

    const handleButtonClick = (type: string) => {
        setContentType(type);
    };

    const renderContentPage = () => {
        return (
            <div className='questionsPage'>
                <div className='questionsPage__button'>
                    <BackButton />
                </div>
                <h2 className='questionsPage__title'>
                    {t('Часто задаваемые вопросы')}
                </h2>
                <div className='questionsPage__navBar'>
                    <button
                        className={`questionsPage__navBar__button ${contentType === 'generalQuestions' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('generalQuestions')}
                    >
                        {t('Общие вопросы')}
                    </button>
                    <button
                        className={`questionsPage__navBar__button ${contentType === 'aboutCards' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('aboutCards')}
                    >
                        {t('О картах')}
                    </button>
                    <button
                        className={`questionsPage__navBar__button ${contentType === 'aboutCredits' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('aboutCredits')}
                    >
                        {t('О кредитах')}
                    </button>
                    <button
                        className={`questionsPage__navBar__button ${contentType === 'aboutDeposits' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('aboutDeposits')}
                    >
                        {t('О вкладах')}
                    </button>
                    <button
                        className={`questionsPage__navBar__button ${contentType === 'aboutInsurance' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('aboutInsurance')}
                    >
                        {t('О страховании')}
                    </button>
                </div>
                <div className='questionsPage__content'>
                    {contentType === 'generalQuestions' && <GeneralQuestions />}
                    {contentType === 'aboutCards' && <AboutCards />}
                    {contentType === 'aboutCredits' && <AboutCredits />}
                    {contentType === 'aboutDeposits' && <AboutDeposits />}
                    {contentType === 'aboutInsurance' && <AboutInsurance />}
                </div>
                <div className='questionsPage__footer'>
                    <p className='questionsPage__footer__title'>
                        {t('Не нашли нужного ответа?')}
                    </p>
                    <p className='questionsPage__footer__text'>
                        {t('Наши специалисты помогут в решении вашего вопроса')}
                    </p>
                    <button
                        className='questionsPage__footer__button'
                        onClick={() => navigate('/contacts')}
                    >
                        {t('Выбрать способ связи')}
                    </button>
                </div>
            </div>
        );
    };

    return <>{renderContentPage()}</>;
};