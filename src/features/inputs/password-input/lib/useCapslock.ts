import { useEffect, useState } from 'react';

export const useCapslock = (): boolean => {
    const [isCapslock, setIsCapslock] = useState<boolean>(false);
    useEffect(() => {
        const checkCapslock = (e: KeyboardEvent) => {
            setIsCapslock(e.getModifierState('CapsLock'));
        };
        addEventListener('keydown', checkCapslock);
        return () => removeEventListener('keydown', checkCapslock);
    }, []);
    return isCapslock;
};
