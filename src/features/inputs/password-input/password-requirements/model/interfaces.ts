export interface PasswordRules {
    length: { matcher: (str: string) => string, message: string };
    existsAllRegisters: { matcher: string, message: string };
    existsDigit: { matcher: string, message: string };
    onlyPermitted: { matcher: string, message: string };
    existsSymbol: { matcher: (str: string) => string, message: string };
}

export interface MatchesResult {
    isMatches: boolean;
    message: string;
}
