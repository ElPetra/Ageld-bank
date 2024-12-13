import { AnswerAndQuestion } from 'src/shared/ui/answerAndQuestion';
import { useTranslation } from 'react-i18next';
import './style.scss';

export const AboutCards = () => {
    const { t } = useTranslation();
    return (
        <div className='aboutCards'>
            <div className='aboutCards__content'>
                <h5 className='aboutCards__title'>{t('Дебетовые карты')}</h5>
                <AnswerAndQuestion
                    question={t('Что нужно, чтобы открыть дебетовую карту?')}
                    answer={t(
                        'Выберите подходящую по условиям, нажмите «Заказать карту» и впишите свои данные. Счёт откроем сразу — можно в этот же день переводить деньги в мобильном приложении или платить за покупки в интернете. Пластиковую карту доставим в течение нескольких дней.'
                    )}
                />
                <AnswerAndQuestion
                    question={t(
                        'Какие виды дебетовых карт есть в банке A-Geld?'
                    )}
                    answer={t('Какой-то ответ')}
                />
                <AnswerAndQuestion
                    question={t('Сколько будут действовать дебетовые карты?')}
                    answer='Какой-то ответ'
                />
                <AnswerAndQuestion
                    question={t('Как изменить лимиты дебетовых карт?')}
                    answer={t('Какой-то ответ')}
                />
            </div>
            <div className='aboutCards__content'>
                <h5 className='aboutCards__title'>{t('Кредитные карты')}</h5>
                <AnswerAndQuestion
                    question={t('Что нужно, чтобы открыть кредитную карту?')}
                    answer={t('Какой-то ответ')}
                />
                <AnswerAndQuestion
                    question={t('Что такое беспроцентный период кредитования?')}
                    answer={t('Какой-то ответ')}
                />
                <AnswerAndQuestion
                    question={t('Как узнать остаток задолженности?')}
                    answer={t('Какой-то ответ')}
                />
                <AnswerAndQuestion
                    question={t('Как изменить лимиты кредитных карт?')}
                    answer={t('Какой-то ответ')}
                />
            </div>
        </div>
    );
};
