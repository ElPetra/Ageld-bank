import { useTranslation } from 'react-i18next';

import { Form } from 'src/shared/ui';
import { DEPOSITS, RouteName } from 'src/shared/model';
import { MessageCard } from 'src/entities/message';

import type { Dispatch, SetStateAction } from 'react';
import type { FieldValues, UseFormHandleSubmit } from 'react-hook-form';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    handleSubmit: UseFormHandleSubmit<FieldValues, FieldValues>;
    createDeposit: (data: FieldValues) => Promise<void>;
}

export const ConfirmCreation = ({
    isLast,
    setFormStep,
    handleSubmit,
    createDeposit
}: Props) => {
    const { t } = useTranslation();

    return (
        <Form
            onSubmit={handleSubmit(async data => {
                await createDeposit(data);
                if (setFormStep && !isLast) {
                    setFormStep(curr => {
                        return curr + 1;
                    });
                }
            })}
        >
            <MessageCard
                middleOfForm={true}
                title={t('Вы действительно хотите открыть депозит?')}
                width={256}
                icon={'confirmation-lady'}
                buttonText={t('Да')}
                type='submit'
                secondButtonText={t('Отмена')}
                secondButtonLink={RouteName.MAIN_PAGE + '/' + DEPOSITS}
            />
        </Form>
    );
};
