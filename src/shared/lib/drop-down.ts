import { useEffect, useState } from 'react';

import type { Dispatch, SetStateAction } from 'react';

export const useDropDown = (
    classname: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const toggleOpen = (e: Event) => {
            if (!(e.target as HTMLElement).closest(`.${classname}`)) {
                if (open) {
                    setOpen(false);
                }
            }
        };
        document.addEventListener('click', toggleOpen);
        return () => document.removeEventListener('click', toggleOpen);
    });
    return [open, setOpen];
};
