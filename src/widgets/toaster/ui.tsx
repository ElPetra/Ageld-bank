import { toast, Toaster, ToastBar } from 'react-hot-toast';

import './styles.scss';
import { Icon } from '../../shared/ui';

export const CustomToaster = () => {
    return (
        <Toaster
            position='top-right'
            reverseOrder={false}
            containerStyle={{
                top: '100px'
            }}
            toastOptions={{
                duration: 2000,
                style: {
                    paddingRight: '20px',
                    maxWidth: '300px',
                    borderRadius: '12px'
                },
                success: {
                    icon: <Icon icon='success-popup' widthAndHeight={48} />,
                    style: {
                        boxShadow: 'var(--bg-success) 0px 1px 6px 0px'
                    }
                },
                error: {
                    icon: <Icon icon='error-popup' widthAndHeight={48} />,
                    style: {
                        boxShadow: 'var(--bg-error) 0px 1px 6px 0px'
                    }
                }
            }}
        >
            {t => (
                <ToastBar toast={t}>
                    {({ icon, message }) => (
                        <>
                            {icon}
                            {message}
                            {t.type !== 'loading' && (
                                <button
                                    className='close'
                                    onClick={() => toast.dismiss(t.id)}
                                >
                                    &#x2715;
                                </button>
                            )}
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
