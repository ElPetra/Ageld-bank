import { memo } from 'react';

import { PasswordMatchCard } from './password-match-card/ui';
import { type MatchesResult, type PasswordRules, passwordRules } from './model';

import './styles.scss';

interface Props {
    password: string;
    requirements: Record<string, boolean | string>;
}

export const PasswordMatchDisplay = memo(
    ({ password, requirements }: Props) => {
        const matchesResult: Record<string, MatchesResult> = {};
        Object.keys(requirements).forEach(el => {
            if (requirements[el] !== false && el in passwordRules) {
                const rule = passwordRules[el as keyof PasswordRules];
                const regex =
                    typeof rule.matcher === 'function'
                        ? rule.matcher(requirements[el].toString())
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
    }
);
