import { useMemo } from 'react';
import { Preloader } from 'src/shared/ui/preloader';
import { Address, Contacts, UserCard } from 'src/entities/user';
import { EmailForm } from 'src/features/forms';
import { useGetInfoQuery } from 'src/shared/api';
import { useFetchToken } from 'src/shared/hooks/useFetchToken';

export const PersonalData = () => {
    const token = useFetchToken();
    const { data, isLoading } = useGetInfoQuery({
        Authorization: token ?? ''
    });

    const infoData = useMemo(() => {
        if (data && typeof data === 'string') {
            return JSON.parse(data);
        }
    }, [data]);

    return (
        <>
            {isLoading && <Preloader />}
            {infoData && (
                <UserCard
                    fullName={`${infoData.lastName} ${infoData.firstName} ${infoData.middleName}`}
                >
                    <Contacts phone={infoData.phoneNumber}>
                        <EmailForm
                            email={infoData.email}
                            key={infoData.email}
                        />
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
