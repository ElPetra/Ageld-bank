import { useTranslation } from 'react-i18next';

import { CREATE, RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';
import { DepositCard } from 'src/entities/deposits';

import type { MockDeposit } from 'src/shared/model';

interface Props {
    content: MockDeposit[];
}

export const CustomerDeposits = ({ content }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            {content.length ? (
                <div>
                    {content.map(el => (
                        <DepositCard key={el.id} deposit={el} />
                    ))}
                </div>
            ) : (
                <MessageCard
                    title={t('На данный момент \n у Вас нет депозитов')}
                    buttonText={t('Оформить')}
                    buttonLink={RouteName.DEPOSIT_PAGE + '/' + CREATE}
                />
            )}
        </>
    );
};
