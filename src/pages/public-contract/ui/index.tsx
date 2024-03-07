import { PublicContract } from 'src/widgets/publicContract';
import { useParams } from 'react-router';
type DocumentType = 'privacyPolicy' | 'termsRBS' | 'personalDataStorage';

type DocumentInfo = {
    title: string,
    pdf: string
};
export const PublicContractPage = () => {
    const { documentType } = useParams<{ documentType?: DocumentType }>();

    const documents: Record<DocumentType, DocumentInfo> = {
        privacyPolicy: {
            title: 'Политика конфиденциальности',
            pdf: 'src/widgets/publicContract/assets/privacy-policy.pdf'
        },
        personalDataStorage: {
            title: 'Хранение персональных данных',
            pdf: 'src/widgets/publicContract/assets/personal-data-storage.pdf'
        },
        termsRBS: {
            title: 'Правила пользования СДБО',
            pdf: 'src/widgets/publicContract/assets/terms-RBS.pdf'
        }
    };

    const document = documentType
        ? documents[documentType]
        : documents.privacyPolicy;

    return (
        <div className='public-contract'>
            <PublicContract document={document} />
        </div>
    );
};
