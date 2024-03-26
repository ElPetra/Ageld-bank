import { Greeting } from 'src/widgets/greeting';
import { useCheckStatusMutation } from 'src/shared/api';
import { useEffect } from 'react';

export const MainPage = () => {
    const [func] = useCheckStatusMutation();

    useEffect(() => {
        func('79234251422');
    }, []);

    //useGetInfoQuery({ Authorization: tokenData?.accessToken || '' });

    return <Greeting />;
};
