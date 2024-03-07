import { MultiStepForm } from 'src/features/multi-step-form';

export const PublicContract = () => {
    return (
        <MultiStepForm
            isFork={true}
            document={{
                title: 'Правила пользования СДБО',
                pdf: 'src/widgets/publicContract/assets/public-contract.pdf',
                height: window.innerHeight,
                width: 580
            }}
        />
    );
};
