import { useTranslation } from 'react-i18next';

import { Card, Text, ToggleList } from 'src/shared/ui';

import './styles.scss';

const requirements = [
    'возраст: от 22 лет и на момент окончания кредитного договора ваш возраст не должен превышать 63 года',
    'минимальный уровень среднемесячного дохода за последние 6 месяцев 20 000 RUB',
    'стаж работы должен быть не менее 12 месяцев'
];

const documents = [
    'документ, удостоверяющий личность',
    'документ,подтверждающий доход'
];

export const CreditProductConditions = () => {
    const { t } = useTranslation();
    return (
        <Card gap='medium' padding='large'>
            <Text size='m' weight='bold'>
                {t('Требования для получения кредита')}
            </Text>
            <ToggleList label={t('Требования к кредитополучателю')}>
                {requirements.map(el => (
                    <div key={el}>{'— ' + el}</div>
                ))}
            </ToggleList>
            <ToggleList
                label={t('Требуемые документы для предварительного решения')}
            >
                {documents.map(el => (
                    <div key={el}>{'— ' + el}</div>
                ))}
            </ToggleList>
        </Card>
    );
};
