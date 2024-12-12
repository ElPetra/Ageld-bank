import { useForm } from 'react-hook-form';
import { Button, Form, Select, Input } from 'src/shared/ui';
import { useDispatch } from 'react-redux';
import { setRegistrationData } from 'src/pages/registration';
import { yupResolver } from '@hookform/resolvers/yup';

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
        { value: '0', label: 'Паспорт гражданина РФ' },
        { value: '1', label: 'Свидетельство о рождении' },
        { value: '2', label: 'Общегражданский загранпаспорт' },
        { value: '3', label: 'Паспорт моряка/удостоверение личности моряка' }
    ];

    const countryOptions = [
        { value: 'Российская Федерация', label: 'Российская Федерация' },
        { value: 'Беларусь', label: 'Беларусь' },
        { value: 'Украина', label: 'Украина' },
        { value: 'Армения', label: 'Армения' }
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
                    issueDate: data.issueDate,
                    expirationDate: data.expirationDate
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
                label='Вид документа'
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
                placeholder='Введите серию и номер'
                error={errors.documentNumber?.message}
            />
            <Select
                label='Страна выдачи документа'
                field='issuingCountry'
                options={countryOptions}
                register={register as unknown as UseFormRegister<FieldValues>}
                error={errors.issuingCountry?.message}
            />
            <Input
                label='Орган, выдавший документ'
                field='issuingAuthority'
                size='large'
                register={register}
                placeholder='Введите орган, выдавший документ'
                error={errors.issuingAuthority?.message}
            />
            <Input
                label='Код органа, выдавшего документ'
                field='codeIssuingAuthority'
                size='large'
                register={register}
                placeholder='Введите код органа'
                error={errors.codeIssuingAuthority?.message}
            />
            <div className='form-container-group'>
                <Input
                    type='date'
                    label='Дата выдачи'
                    field='issueDate'
                    register={register}
                    placeholder='Дата выдачи'
                    error={errors.issueDate?.message}
                />
                <Input
                    type='date'
                    label='Дата истечения срока'
                    field='expirationDate'
                    register={register}
                    placeholder='Дата истечения срока'
                    error={errors.expirationDate?.message}
                />
            </div>
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isValid}
            >
                Продолжить
            </Button>
        </Form>
    );
};
