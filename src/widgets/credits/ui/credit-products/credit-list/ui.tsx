import { useTranslation } from 'react-i18next';

import { Columns, Preloader } from 'src/shared/ui';
import { CreditProductCard } from 'src/entities/credits';
import { MessageCard } from 'src/entities/message';

import type { CreditProduct } from 'src/shared/model';

import './styles.scss';

interface Props {
    credits: CreditProduct[];
    isLoading: boolean;
}

export const CreditList = ({ credits, isLoading }: Props) => {
    const { t } = useTranslation();

    return (
        <div className='deposit-list'>
            {isLoading ? (
                <Preloader />
            ) : credits.length ? (
                <Columns number='2'>
                    {credits.map(el => (
                        <CreditProductCard key={el.id} credit={el} />
                    ))}
                </Columns>
            ) : (
                <MessageCard title={t('Кредит не найден')} />
            )}
        </div>
    );
};
