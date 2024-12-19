import { useForm } from 'react-hook-form';
import { Button, Form, Select, Input } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { formatDate } from 'src/shared/lib';

import { useCitizenshipOptions } from '../model/forms-helpers';

import { documentSchema } from './validateSchema';

import type { FieldValues, UseFormRegister } from 'react-hook-form';
import type { Dispatch, SetStateAction } from 'react';

interface DocumentFormFields {
    documentTypeId: number;
    documentNumber: string;
    issuingCountry: string;
    issuingAuthority: string;
    codeIssuingAuthority?: string;
    issueDate: string;
    expirationDate: string;
}

interface Props {
    setFormStep?: Dispatch<SetStateAction<number>>;
}

export const DocumentForm = ({ setFormStep }: Props) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<DocumentFormFields>({
        resolver: yupResolver(documentSchema),
        mode: 'onTouched',
        defaultValues: {
            documentTypeId: 0,
            documentNumber: '',
            issuingCountry: '',
            issuingAuthority: '',
            codeIssuingAuthority: '',
            issueDate: '',
            expirationDate: ''
        }
    });

    const documentTypeOptions = [
        { value: '1', label: t('Паспорт') },
        { value: '2', label: t('Свидетельство о рождении') },
        { value: '3', label: t('Общегражданский загранпаспорт') },
        { value: '4', label: t('Паспорт моряка/удостоверение личности моряка') }
    ];

    const onSubmit = (data: DocumentFormFields) => {
        dispatch(
            setRegistrationData({
                document: {
                    documentTypeId: data.documentTypeId,
                    documentNumber: data.documentNumber,
                    issuingCountry: data.issuingCountry,
                    issuingAuthority: data.issuingAuthority,
                    codeIssuingAuthority: data.codeIssuingAuthority || '',
                    issueDate: formatDate(data.issueDate),
                    expirationDate: formatDate(data.expirationDate)
                }
            })
        );
        if (setFormStep) {
            setFormStep(curr => curr + 1);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Select
                label={t('Вид документа')}
                field='documentTypeId'
                options={documentTypeOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.documentTypeId?.message}
            />
            <Input
                label='Серия и номер документа'
                field='documentNumber'
                size='large'
                register={register}
                placeholder={t('Введите серию и номер')}
                error={errors.documentNumber?.message}
            />
            <Select
                label={t('Страна выдачи документа')}
                field='issuingCountry'
                options={useCitizenshipOptions()}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.issuingCountry?.message}
            />
            <Input
                label='Орган, выдавший документ'
                field='issuingAuthority'
                size='large'
                register={register}
                placeholder={t('Введите орган, выдавший документ')}
                error={errors.issuingAuthority?.message}
            />
            <Input
                label='Код органа, выдавшего документ'
                field='codeIssuingAuthority'
                size='large'
                register={register}
                placeholder={t('Введите код органа')}
                error={errors.codeIssuingAuthority?.message}
            />
            <div className='form-container-group'>
                <Input
                    type='date'
                    label='Дата выдачи'
                    field='issueDate'
                    register={register}
                    placeholder={t('Дата выдачи')}
                    error={errors.issueDate?.message}
                />
                <Input
                    type='date'
                    label='Дата истечения срока'
                    field='expirationDate'
                    register={register}
                    placeholder={t('Дата истечения срока')}
                    error={errors.expirationDate?.message}
                />
            </div>
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isValid}
            >
                {t('Продолжить')}
            </Button>
        </Form>
    );
};
