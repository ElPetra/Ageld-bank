export const getIconName = (payment: string) => {
    switch (payment) {
        case 'VISA':
            return 'visa';
        case 'МИР':
            return 'mir';
        default:
            return 'visa';
    }
};
