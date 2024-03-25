import { RouteName } from 'src/shared/model';
import { Link, Text } from 'src/shared/ui';
import { Greeting } from 'src/widgets/greeting';
import {
    useCheckStatusMutation,
    useGenerateTokenMutation,
    useGetInfoQuery,
    useGetTestQuery
} from 'src/shared/api';
import { useEffect } from 'react';

export const MainPage = () => {
    useGetInfoQuery({
        Authorization:
            'eyJhbGciOiJIUzM4NCJ9.eyJDdXN0b21lci1JZCI6IjdjY2JkMzJlLWNkZDctNDkwYy05NDQ2LWRkNzE2ZDIzNmZjNSIsInN1YiI6Ijc5MjM0MjUxNDIyIiwiaWF0IjoxNzExMTEyMjczLCJleHAiOjE3MTExMTIzOTN9.cRMIK35q40XpyJW83yKe3BPLg_V4vk1kQTjxFPHUVlirzf-gIAOKMF7N5j_Zo6uX'
    });
    const { data, isLoading } = useGetTestQuery();
    if (!isLoading) {
        console.log(data);
    }

    const [func] = useCheckStatusMutation();
    const [func1] = useGenerateTokenMutation();

    useEffect(() => {
        func('79234251422');
        func1({ phoneNumber: '79234251422', password: 'Password@123' });
    }, []);

    return (
        <div>
            <div className='greeting'>
                <Greeting />
                <div className='greeting__warning-text'>
                    <Text size='l' weight='regular'>
                        Доступ в личный кабинет возможен с телефонного номера,
                        указанного при открытии счёта в нашем банке.
                        <br />
                        <br />
                        Для входа в личный кабинет &nbsp;
                        <Link variant='action' to={RouteName.LOGIN_PAGE}>
                            Войти
                        </Link>
                        &nbsp;/&nbsp;
                        <Link variant='action' to={RouteName.REGISTRATION_PAGE}>
                            Зарегистрироваться
                        </Link>
                        .
                    </Text>
                </div>
            </div>
        </div>
    );
};
