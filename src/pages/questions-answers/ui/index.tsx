import { BackButton } from 'src/features/multi-step-form';

import { useTranslation } from 'react-i18next';

import './style.scss';

import { AboutCards } from './about-cards';
export const AnswerAndQuestionPage = () => {
    const { t } = useTranslation();
    return (
        <div className='questionsPage'>
            <div className='questionsPage__button'>
                <BackButton />
            </div>
            <h2 className='questionsPage__title'>
                {t('Часто задаваемые вопросы')}
            </h2>
            <div className='questionsPage__navBar'>
                <button className='questionsPage__navBar__button'>
                    {t('Общие вопросы')}
                </button>
                <button className='questionsPage__navBar__button active'>
                    {t('О картах')}
                </button>
                <button className='questionsPage__navBar__button'>
                    {t('О кредитах')}
                </button>
                <button className='questionsPage__navBar__button'>
                    {t('О вкладах')}
                </button>
                <button className='questionsPage__navBar__button'>
                    {t('О страховании')}
                </button>
            </div>
            <AboutCards />
            <div className='questionsPage__footer'>
                <p className='questionsPage__footer__title'>
                    {t('Не нашли нужного ответа?')}
                </p>
                <p className='questionsPage__footer__text'>
                    {t('Наши специалисты помогут в решении вашего вопроса')}
                </p>
                <button className='questionsPage__footer__button'>
                    {t('Выбрать способ связи')}
                </button>
            </div>
        </div>
    );
};

export default AnswerAndQuestionPage;
