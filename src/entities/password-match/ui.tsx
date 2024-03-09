import { memo } from 'react';

import { PasswordMatchCard } from './password-match-card/ui';
import { type MatchesResult, type PasswordRules, passwordRules } from './model';

import './styles.scss';

interface Props {
    password: string;
    requirments: Record<string, boolean | string>;
}

export const PasswordMatchDisplay = memo(({ password, requirments }: Props) => {
    const matchesResult: Record<string, MatchesResult> = {};
    Object.keys(requirments).forEach(el => {
        if (requirments[el] !== false && el in passwordRules) {
            const rule = passwordRules[el as keyof PasswordRules];
            const regex =
                typeof rule.matcher === 'function'
                    ? rule.matcher(requirments[el].toString())
                    : rule.matcher;
            matchesResult[el] = {
                isMatches: new RegExp(regex, 'gm').test(password),
                message: rule.message
            };
        }
    });
    return (
        <div className='password-match_display'>
            {Object.keys(matchesResult)
                .sort()
                .map((el, i) => (
                    <PasswordMatchCard
                        key={i}
                        isMatches={matchesResult[el].isMatches}
                        message={matchesResult[el].message}
                    />
                ))}
        </div>
    );
});
