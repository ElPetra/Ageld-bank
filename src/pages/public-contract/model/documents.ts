export type DocumentType = 'privacyPolicy' | 'termsRBS';

interface DocumentInfo {
    title: string;
    pdf: string;
}

export const documents: Record<DocumentType, DocumentInfo> = {
    privacyPolicy: {
        title: 'Политика конфиденциальности',
        pdf: 'src/page/public-contract/assets/privacy-policy.pdf'
    },
    termsRBS: {
        title: 'Правила дистанционного банковского обслуживания',
        pdf: 'src/page/public-contract/assets/terms-RBS.pdf'
    }
};
