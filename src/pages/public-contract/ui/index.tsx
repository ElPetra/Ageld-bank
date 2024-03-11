import { useParams } from 'react-router';

import { MultiStepForm } from 'src/features/multi-step-form';
import { RouteName } from 'src/shared/model';

import { documents } from '../model';

import type { DocumentType } from '../model';

export const PublicContractPage = () => {
    const { documentType } = useParams<{ documentType?: DocumentType }>();

    const document = documentType
        ? documents[documentType]
        : documents.privacyPolicy;

    return (
        <div className='public-contract'>
            <MultiStepForm
                isFork={true}
                to={RouteName.MAIN_PAGE}
                document={{
                    title: document.title,
                    pdf: document.pdf,
                    height: window.innerHeight,
                    width: 580
                }}
            />
        </div>
    );
};
