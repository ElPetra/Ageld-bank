import { MultiStepForm } from 'src/features/multi-step-form';
interface Props {
    document: {
        title: string,
        pdf: string
    };
}

export const PublicContract = ({ document }: Props) => {
    return (
        <MultiStepForm
            isFork={true}
            document={{
                title: document.title,
                pdf: document.pdf,
                height: window.innerHeight,
                width: 580
            }}
        />
    );
};
