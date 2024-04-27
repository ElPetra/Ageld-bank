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

export enum AuthStatus {
    Loading = 'Loading',
    SignedIn = 'SignedIn',
    SignedOut = 'SignedOut'
}
