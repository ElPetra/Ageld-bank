import { useEffect, useState } from 'react';
import { Preloader } from 'src/shared/ui/preloader/index.js';
import { Address, Contacts, UserCard } from 'src/entities/user/index.js';
import { EmailForm } from 'src/features/forms/index.js';
import { useGetInfoQuery } from 'src/shared/api/index.js';
import { getActualAccessToken } from 'src/shared/lib/index.js';

import type { CustomerInfo } from 'src/shared/model/index.js';

export const PersonalData = () => {
    const [token, setToken] = useState<string | null>(null);
    const [infoData, setInfoData] = useState<CustomerInfo | null>(null);
    const { data, isLoading } = useGetInfoQuery({
        Authorization: token ?? ''
    });

    useEffect(() => {
        async function fetchToken() {
            const fetchedToken = await getActualAccessToken();
            setToken(fetchedToken);
        }
        if (data && typeof data === 'string') {
            const jsonData = JSON.parse(data);
            setInfoData(jsonData);
        }
        fetchToken();
    }, [data]);

    return (
        <>
            {isLoading && <Preloader />}
            {infoData && (
                <UserCard
                    fullName={`${infoData.lastName} ${infoData.firstName} ${infoData.middleName}`}
                >
                    <Contacts phone={infoData.phoneNumber}>
                        <EmailForm email={infoData.email} />
                    </Contacts>
                    <Address
                        street='Б-р Энтузиастов'
                        house='2'
                        apartment='24'
                        city='Москва'
                        index='134567'
                    />
                </UserCard>
            )}
        </>
    );
};
