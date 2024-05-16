export const getIconName = (payment: string) => {
    switch (payment) {
        case 'VISA':
            return 'visa-icon';
        case 'МИР':
            return 'mir-icon';
        default:
            return 'visa-icon';
    }
};

export const getStatusName = (status: string | null) => {
    switch (status) {
        case 'ACTIVE':
            return 'Активная';
        case 'BLOCKED':
            return 'Заблокированная';
        default:
            return 'Неизвестный статус';
    }
};
