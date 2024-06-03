import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { InfoCard } from '../info-card';

import { type MatchesResult, type PasswordRules, passwordRules } from './model';

import './styles.scss';

interface Props {
    password: string;
    requirements: Record<string, boolean | string>;
}

export const PasswordRequirements = memo(
    ({ password, requirements }: Props) => {
        const matchesResult: Record<string, MatchesResult> = useMemo(() => {
            const result: Record<string, MatchesResult> = {};
            Object.keys(requirements).forEach(el => {
                if (requirements[el] !== false && el in passwordRules) {
                    const rule = passwordRules[el as keyof PasswordRules];
                    const regex =
                        typeof rule.matcher === 'function'
                            ? rule.matcher(requirements[el].toString())
                            : rule.matcher;
                    result[el] = {
                        isMatches: new RegExp(regex, 'gm').test(password),
                        message: rule.message
                    };
                }
            });
            return result;
        }, [requirements, password]);
        const { t } = useTranslation();

        return (
            <div className='password-requirements'>
                {Object.keys(matchesResult)
                    .sort()
                    .map((el, i) => (
                        <InfoCard
                            key={i}
                            icon={
                                matchesResult[el].isMatches
                                    ? 'success-icon'
                                    : 'error-icon'
                            }
                            testId={el}
                            message={t(matchesResult[el].message)}
                        />
                    ))}
            </div>
        );
    }
);
