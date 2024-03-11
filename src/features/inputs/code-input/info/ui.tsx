import { useEffect, useState } from 'react';

import { Button, Text } from 'src/shared/ui';

export const Info = () => {
    const [seconds, setSeconds] = useState<number>(30);

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
                <Button variant='link'>
                    <Text size='xs'>Отправить смс еще раз</Text>
                </Button>
            )}
        </div>
    );
};
