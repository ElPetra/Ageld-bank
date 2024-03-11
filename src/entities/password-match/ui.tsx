import { memo, useMemo } from 'react';

import { InfoCard } from '../../shared/info-card';

import { type MatchesResult, type PasswordRules, passwordRules } from './model';

import './styles.scss';

interface Props {
    password: string;
    requirments: Record<string, boolean | string>;
}

export const PasswordMatchDisplay = memo(({ password, requirments }: Props) => {
    const matchesResult: Record<string, MatchesResult> = useMemo(() => {
        const result: Record<string, MatchesResult> = {};
        Object.keys(requirments).forEach(el => {
            if (requirments[el] !== false && el in passwordRules) {
                const rule = passwordRules[el as keyof PasswordRules];
                const regex =
                    typeof rule.matcher === 'function'
                        ? rule.matcher(requirments[el].toString())
                        : rule.matcher;
                result[el] = {
                    isMatches: new RegExp(regex, 'gm').test(password),
                    message: rule.message
                };
            }
        });
        return result;
    }, [requirments]); //добавил мемоизацию, проверить работу
    return (
        <div className='password-match_display'>
            {Object.keys(matchesResult)
                .sort()
                .map((el, i) => (
                    <InfoCard
                        key={i}
                        icon={matchesResult[el].isMatches ? 'success' : 'error'}
                        message={matchesResult[el].message}
                    />
                ))}
        </div>
    );
});
