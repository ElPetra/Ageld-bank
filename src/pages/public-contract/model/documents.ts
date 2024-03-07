export type DocumentType = 'privacyPolicy' | 'termsRBS' | 'personalDataStorage';

interface DocumentInfo {
    title: string;
    pdf: string;
}

export const documents: Record<DocumentType, DocumentInfo> = {
    privacyPolicy: {
        title: 'Политика конфиденциальности',
        pdf: 'src/pages/public-contract/assets/privacy-policy.pdf'
    },
    personalDataStorage: {
        title: 'Хранение персональных данных',
        pdf: 'src/pages/public-contract/assets/personal-data-storage.pdf'
    },
    termsRBS: {
        title: 'Правила пользования СДБО',
        pdf: 'src/pages/public-contract/assets/terms-RBS.pdf'
    }
};
