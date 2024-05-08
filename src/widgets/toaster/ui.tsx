import { toast, ToastBar, Toaster } from 'react-hot-toast';

import { Icon, Text } from 'src/shared/ui';

import './styles.scss';

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
                className: 'toaster',
                success: {
                    icon: <Icon icon='success-popup' widthAndHeight={48} />
                },
                error: {
                    icon: <Icon icon='error-popup' widthAndHeight={48} />
                }
            }}
        >
            {t => (
                <ToastBar toast={t}>
                    {({ icon }) => (
                        <div className='toaster-bar'>
                            <div className='toaster-bar__icon'>
                                {icon}
                                <div className='toaster-bar__icon__text'>
                                    <Text size='xxs'>
                                        {t.type === 'success'
                                            ? 'Успех'
                                            : 'Ошибка'}
                                    </Text>
                                    <Text size='xxs' weight='light'>
                                        {t.type === 'success'
                                            ? 'Операция прошла успешно'
                                            : 'Повторите запрос позже'}
                                    </Text>
                                </div>
                            </div>
                            <button onClick={() => toast.dismiss(t.id)}>
                                <Icon icon='close-icon' />
                            </button>
                        </div>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
