import { useState } from 'react';

import { Button, Card, Checkbox, Form, Text } from 'src/shared/ui';
import { CREATE_ACCOUNT } from 'src/shared/model';

import type { Dispatch, FormEvent, SetStateAction } from 'react';

interface Props {
    isLast?: boolean;
    setFormStep?: Dispatch<SetStateAction<number>>;
    type: string;
    currencyName: string;
    createdAccount: (
        type: string,
        currencyName: string
    ) => Promise<string | void>;
}

export const Agreement = ({
    isLast,
    setFormStep,
    type,
    currencyName,
    createdAccount
}: Props) => {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createdAccount(type, currencyName);
        if (setFormStep && !isLast) {
            setFormStep(curr => {
                return curr + 1;
            });
        }
    };
    return (
        <Form onSubmit={onSubmit}>
            <Card
                color='quadruple'
                gap='medium'
                padding='large'
                borderRadius='extra-large'
                direction='column'
            >
                <Text weight='medium' size='m'>
                    Очень важное соглашение, которое нужно принять
                </Text>
                <Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi in adipisci nulla modi non corporis id
                    perspiciatis aliquid, debitis rerum inventore distinctio
                    quibusdam quaerat ullam libero recusandae ipsum nostrum
                    veritatis. Quia nemo iusto quidem iste ipsam quae aperiam
                    commodi totam nostrum minima, nisi voluptates, tempore
                    repellendus laudantium! Mollitia maxime esse tempore
                    molestias cumque autem ut inventore nulla quisquam
                    reprehenderit vitae at nisi, placeat, aliquam saepe ad,
                    delectus quos ipsa repellendus temporibus est. Natus
                    distinctio blanditiis repellendus atque inventore pariatur
                    impedit omnis commodi hic quae delectus suscipit eum vero,
                    iusto doloribus est nihil. Tenetur neque laborum, odio quas
                    aliquid doloremque. Nesciunt et repudiandae, odit ratione
                    aliquam officiis praesentium adipisci accusamus
                    necessitatibus iusto illo voluptate reprehenderit aperiam
                    ipsam rerum? Impedit, explicabo tempora ipsum saepe, dolorem
                    debitis aspernatur cum esse earum eum, neque hic similique
                    sapiente. Asperiores, possimus quis magni quo nihil aperiam
                    at iusto eligendi id, molestiae tempora deleniti praesentium
                    ab eius dolorum dicta vel neque aspernatur magnam enim
                    exercitationem voluptatem sunt et fuga. Molestias
                    repudiandae ipsam eveniet et, inventore aut nam odio
                    corporis recusandae numquam minima accusantium ab ut
                    temporibus libero deleniti voluptatem ad praesentium. Dicta
                    ut magnam autem nobis reiciendis id, consectetur ullam
                    laudantium asperiores maxime doloribus, illo impedit
                    voluptatibus!
                </Text>
                <Checkbox
                    onCheckbox={() => setIsConfirmed(prev => !prev)}
                    label='Принимаю соглашение'
                />
                <Button
                    disabled={!isConfirmed}
                    type='submit'
                    variant='secondary'
                >
                    <Text>{CREATE_ACCOUNT}</Text>
                </Button>
            </Card>
        </Form>
    );
};
