import { useTranslation } from 'react-i18next';

import { toast, ToastBar, Toaster } from 'react-hot-toast';

import { Icon, Text } from 'src/shared/ui';

import './styles.scss';

export const CustomToaster = () => {
    const { t } = useTranslation();
    return (
        <Toaster
            position='top-right'
            reverseOrder={false}
            containerStyle={{
                top: '100px'
            }}
            toastOptions={{
                duration: 2000,
                className: 'toaster',
                success: {
                    icon: <Icon icon='success-popup' widthAndHeight={48} />
                },
                error: {
                    icon: <Icon icon='error-popup' widthAndHeight={48} />
                }
            }}
        >
            {toast => (
                <ToastBar toast={toast}>
                    {({ icon }) => (
                        <div className='toaster-bar'>
                            <div className='toaster-bar__icon'>
                                {icon}
                                <div className='toaster-bar__icon__text'>
                                    <Text size='xxs'>
                                        {toast.type === 'success'
                                            ? t('Успех')
                                            : t('Ошибка')}
                                    </Text>
                                    <Text size='xxs' weight='light'>
                                        {toast.type === 'success'
                                            ? t('Операция прошла успешно')
                                            : t('Повторите запрос позже')}
                                    </Text>
                                </div>
                            </div>
                            <button onClick={() => toast.dismiss(toast.id)}>
                                <Icon icon='close-icon' />
                            </button>
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
