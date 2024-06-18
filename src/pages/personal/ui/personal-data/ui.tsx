import { Address, Contacts, UserCard } from 'src/entities/user';
import { EmailForm } from 'src/features/forms';

import type { CustomerInfo } from 'src/shared/model';

interface Props {
    info: CustomerInfo;
}

export const PersonalData = ({ info }: Props) => {
    return (
        <UserCard
            fullName={`${info.lastName} ${info.firstName} ${info.middleName}`}
        >
            <Contacts
                phone={info.phoneNumber.replace(
                    /(\d)(\d{3})(\d{3})(\d{2})(\d)/,
                    '+7 ($2) $3-$4-$5'
                )}
            >
                <EmailForm email={info.email} key={info.email} />
            </Contacts>
            <Address
                street='Б-р Энтузиастов'
                house='2'
                apartment='24'
                city='Москва'
                index='134567'
            />
        </UserCard>
    );
};
