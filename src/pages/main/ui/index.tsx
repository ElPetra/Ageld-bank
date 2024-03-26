import { Greeting } from 'src/widgets/greeting';
import {
    useCheckStatusMutation,
    useGenerateTokenMutation,
    useGetInfoQuery,
    useGetTestQuery
} from 'src/shared/api';
import { useEffect } from 'react';

export const MainPage = () => {
    return <Greeting />;
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

    return <Greeting />;
};
