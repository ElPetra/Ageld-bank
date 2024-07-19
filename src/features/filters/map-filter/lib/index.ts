import {
    ATM,
    BRANCH,
    EXCHANGE_OFFICE,
    INDIVIDUALS,
    INFOKIOSK,
    LEGAL_ENTITIES,
    MAIN_OFFICE,
    objectTypeName,
    OPTIONS_WORKS,
    segmentName
} from 'src/shared/model';

import { isOpen } from 'src/shared/lib';

import type { BankObject } from 'src/shared/model';

export const getFilteredBankObjects = (
    bankObjects: BankObject[],
    filters: string[]
): BankObject[] => {
    if (!bankObjects) {
        return [];
    }
    return bankObjects.filter(bankObject => {
        let objectType = false;
        let objectTypeFilter = false;
        let segment = false;
        let segmentFilter = false;
        for (const i in filters) {
            if (filters[i] === OPTIONS_WORKS && !isOpen(bankObject.schedule)) {
                return false;
            }
            if (
                filters[i] === ATM ||
                filters[i] === INFOKIOSK ||
                filters[i] === MAIN_OFFICE ||
                filters[i] === BRANCH ||
                filters[i] === EXCHANGE_OFFICE
            ) {
                objectTypeFilter = true;
                if (objectTypeName[bankObject.objectTypeName] === filters[i]) {
                    objectType = true;
                }
            }
            if (filters[i] === INDIVIDUALS || filters[i] === LEGAL_ENTITIES) {
                segmentFilter = true;
                if (segmentName[bankObject.segment] === filters[i]) {
                    segment = true;
                }
            }
        }
        return (!objectTypeFilter || objectType) && (!segmentFilter || segment);
    });
};
