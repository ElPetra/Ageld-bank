import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
export interface Address {
    addressTypeId: number;
    countryCodeISO: string;
    region: string;
    locationType: string;
    location: string;
    streetType: string;
    street: string;
    microdistrict: string;
    houseNumber: string;
    litera: string;
    buildingNumberHouse: string;
    apartmentNumber: string;
    postalCode: string;
}

export interface Document {
    documentTypeId: number;
    documentNumber: string;
    issuingCountry: string;
    issuingAuthority: string;
    codeIssuingAuthority: string;
    issueDate: string;
    expirationDate: string;
}

export interface RegistrationState {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    gender: string;
    birthday: string;
    familyStatusCode: number;
    childCount: number;
    secretQuestion: string;
    secretAnswer: string;
    citizenship: string;
    registrationAddress: Address;
    actualAddress: Address;
    document: Document;
    password: string;
}

const initialState: RegistrationState = {
    phoneNumber: '',
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    gender: '',
    birthday: '',
    familyStatusCode: 0,
    childCount: 0,
    secretQuestion: '',
    secretAnswer: '',
    citizenship: '',
    registrationAddress: {
        addressTypeId: 0,
        countryCodeISO: '',
        region: '',
        locationType: '',
        location: '',
        streetType: '',
        street: '',
        microdistrict: '',
        houseNumber: '',
        litera: '',
        buildingNumberHouse: '',
        apartmentNumber: '',
        postalCode: ''
    },
    actualAddress: {
        addressTypeId: 0,
        countryCodeISO: '',
        region: '',
        locationType: '',
        location: '',
        streetType: '',
        street: '',
        microdistrict: '',
        houseNumber: '',
        litera: '',
        buildingNumberHouse: '',
        apartmentNumber: '',
        postalCode: ''
    },
    document: {
        documentTypeId: 0,
        documentNumber: '',
        issuingCountry: '',
        issuingAuthority: '',
        codeIssuingAuthority: '',
        issueDate: '',
        expirationDate: ''
    },
    password: ''
};

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setRegistrationData(
            state,
            action: PayloadAction<Partial<RegistrationState>>
        ) {
            return { ...state, ...action.payload };
        },
        resetRegistration() {
            return initialState;
        }
    }
});

export const { setRegistrationData, resetRegistration } =
    registrationSlice.actions;
export default registrationSlice.reducer;
