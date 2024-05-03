import { useEffect, useState } from 'react';

import { Button, Text } from 'src/shared/ui';
import { useAuth } from 'src/entities/user';

interface Props {
    phone: string;
}

export const Info = ({ phone }: Props) => {
    const [seconds, setSeconds] = useState<number>(30);
    const { generatedCode } = useAuth();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);
        if (seconds <= 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <div className='code-input__info'>
            {seconds > 0 ? (
                <Text size='xs'>
                    Повторная отправка через 0:
                    {seconds < 10 ? '0' : ''}
                    {seconds}
                </Text>
            ) : (
                <Button
                    variant='link'
                    onClick={() => {
                        generatedCode(phone);
                        setSeconds(30);
                    }}
                >
                    <Text size='xs'>Отправить смс еще раз</Text>
                </Button>
            )}
        </div>
    );
};
