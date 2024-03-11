import { useForm } from 'react-hook-form';

import { PhoneInput } from 'src/features/inputs';
import { Button, Form, Link, Text } from 'src/shared/ui';
import { RouteName } from 'src/shared/model';
import './styles.scss';

import { type Dispatch, type SetStateAction, useState } from 'react';

import type { FieldValues } from 'react-hook-form';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
}
export const Registration = ({ isLast, setFormStep }: Props) => {
    const [clickedLinks, setClickedLinks] = useState<number[]>([]);
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm<FieldValues>({
        mode: 'onTouched',
        reValidateMode: 'onChange',
        defaultValues: { phone: '' }
    });
    const handleLinkClick = (linkId: number) => {
        if (!clickedLinks.includes(linkId)) {
            setClickedLinks([...clickedLinks, linkId]);
        }
    };
    const allLinksClicked = clickedLinks.length === 2;
    return (
        <Form
            onSubmit={handleSubmit(data => {
                if (setFormStep && !isLast) {
                    setFormStep(curr => curr + 1);
                }
                console.log(data.phone.replace(/\D/gm, ''));
            })}
        >
            <PhoneInput
                clear={() => setValue('phone', '')}
                label={'phone'}
                register={register}
                isError={!!errors?.phone}
            />
            <Text size='xs'>
                Нажав кнопку «Далее», вы соглашаетесь с &nbsp;
                <a
                    onClick={() => handleLinkClick(1)}
                    href={`${RouteName.PUBLIC_CONTRACT_PAGE}/terms-RBS.pdf`}
                    target='_blank'
                    rel='noreferrer'
                    className='document-link'
                >
                    Правилами дистанционного банковского обслуживания
                </a>
                &nbsp; и &nbsp;
                <a
                    href={`${RouteName.PUBLIC_CONTRACT_PAGE}/privacy-policy.pdf`}
                    onClick={() => handleLinkClick(2)}
                    target='_blank'
                    rel='noreferrer'
                    className='document-link'
                >
                    Политикой конфиденциальности
                </a>
                &nbsp; и даёте согласие на сбор и обработку информации
            </Text>

            <Button variant='secondary' size='large' type='button'>
                <Link to={RouteName.MAIN_PAGE}>Отклонить</Link>
            </Button>
            <Button
                variant='secondary'
                size='large'
                type='submit'
                disabled={!isDirty || !isValid || !allLinksClicked}
            >
                Принять
            </Button>
        </Form>
    );
};
