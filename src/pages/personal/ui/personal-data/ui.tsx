import { Preloader } from 'src/shared/ui';
import { Address, Contacts, UserCard } from 'src/entities/user';
import { EmailForm } from 'src/features/forms';
import { getAccessToken, useGetInfoQuery } from 'src/shared/api';

export const PersonalData = () => {
    const token = getAccessToken();
    const { data, isLoading } = useGetInfoQuery({
        Authorization: token ?? ''
    });
    return (
        <>
            {isLoading && <Preloader />}
            {data && (
                <UserCard
                    fullName={`${data.lastName} ${data.firstName} ${data.middleName}`}
                >
                    <Contacts phone={data.phoneNumber}>
                        <EmailForm email={data.email} key={data.email} />
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
