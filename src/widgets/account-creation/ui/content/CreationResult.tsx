import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { Icon, type SvgIconNames, Text } from 'src/shared/ui';

import {
    ACCOUNT_CREATION_FAILED,
    ACCOUNT_CREATION_SUCCESS,
    GO_TO_ACCOUNT_LIST
} from '../../model';

interface Match {
    text: string;
    icon: SvgIconNames;
}

const resultMatcher: Record<string, Match> = {
    failed: {
        text: ACCOUNT_CREATION_FAILED,
        icon: 'failure-lady'
    },
    success: {
        text: ACCOUNT_CREATION_SUCCESS,
        icon: 'documents-folder-lady'
    }
};

export const CreationResult = () => {
    const { creationResult } = useParams();
    const { pathname } = useLocation();
    if (
        (creationResult !== 'failed' && creationResult !== 'success') ||
        creationResult === undefined
    ) {
        return <Navigate to='/' state={{ from: pathname }} />;
    }
    return (
        <div className='create__account__container'>
            <div className='create__account__result'>
                <Text align='center' size='m' weight='medium'>
                    {resultMatcher[creationResult].text}
                </Text>
                <Icon
                    width={275}
                    height={200}
                    icon={resultMatcher[creationResult].icon}
                />
                <Link className='button medium max secondary' to='/3'>
                    {GO_TO_ACCOUNT_LIST}
                </Link>
            </div>
        </div>
    );
};
