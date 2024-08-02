import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Form } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
    prolongDeposit: (data: FieldValues) => Promise<void>;
}

export const ConfirmExtension = ({
    isLast,
    setFormStep,
    handleSubmit,
    prolongDeposit
}: Props) => {
    const { t } = useTranslation();
    const { id } = useParams<string>();

    return (
        <Form
            onSubmit={handleSubmit(async data => {
                await prolongDeposit(data);
                if (setFormStep && !isLast) {
                    setFormStep(curr => {
                        return curr + 1;
                    });
                }
            })}
        >
            <MessageCard
                title={t('Вы действительно хотите пролонгировать депозит?')}
                width={256}
                icon={'confirmation-lady'}
                buttonText={t('Да')}
                type='submit'
                secondButtonText={t('Отмена')}
                secondButtonLink={RouteName.DEPOSIT_PAGE + '/' + id}
            />
        </Form>
    );
};
