export const customerBaseUrl =
    import.meta.env.VITE_BASEURL_GATEWAY + '/api/v1/customer';

export interface CustomerInfo {
    firstName: string;
    lastName: string;
    middleName: string;
    phoneNumber: string;
    email: string;
    birthDate: string;
    childCount: number;
    registrationDateBank: string;
    status: string;
}
