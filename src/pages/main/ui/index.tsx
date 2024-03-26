import { Greeting } from 'src/widgets/greeting';
import {
    useCheckStatusMutation,
    useGenerateTokenMutation,
    useGetInfoQuery
} from 'src/shared/api';
import { useEffect } from 'react';

export const MainPage = () => {
    const [func] = useCheckStatusMutation();
    const [func1, { data: tokenData }] = useGenerateTokenMutation();

    useEffect(() => {
        func('79234251422');
        func1({
            phoneNumber: '79234251422',
            password: 'Password@123'
        }).then(data => {
            if ('data' in data) {
                localStorage.setItem('accessToken', data.data.accessToken);
                localStorage.setItem('refreshToken', data.data.refreshToken);
            }
        });
    }, []);

    if (tokenData) {
        console.log(tokenData.accessToken || '');
    }

    useGetInfoQuery({ Authorization: tokenData?.accessToken || '' });

    return <Greeting />;
};
