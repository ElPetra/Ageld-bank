import { Fragment } from 'react';

import { Columns } from 'src/shared/ui';
import { MessageCard } from 'src/entities/message';
import { useTranslation } from 'react-i18next';
import { accountTypesInfo } from 'src/shared/model';

import type { Dispatch, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    setType: Dispatch<SetStateAction<string>>;
}

export const TypeVariant = ({ isLast, setFormStep, setType }: Props) => {
    const { t } = useTranslation();
    return (
        <Columns number='3' align='center'>
            {accountTypesInfo.map(el => (
                <Fragment key={el.value}>
                    <MessageCard
                        title={t(el.type)}
                        text={t(el.title)}
                        gap='extra-small'
                        padding='medium'
                        width={380}
                        icon={el.icon}
                        buttonText={t('Открыть счет')}
                        onClick={() => {
                            setType(el.value);
                            if (setFormStep && !isLast) {
                                setFormStep(curr => {
                                    return curr + 1;
                                });
                            }
                        }}
                        isMargin={false}
                    />
                </Fragment>
            ))}
        </Columns>
    );
};
