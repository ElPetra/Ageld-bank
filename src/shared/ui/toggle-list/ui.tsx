import { memo, type ReactNode, useState } from 'react';
import cn from 'classnames';

import { Icon } from 'src/shared/ui';

import './styles.scss';

interface Props {
    label: string;
    children: ReactNode;
}

export const ToggleList = memo(({ label, children }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const buttonClass = cn('toggle-list__button', {
        open: open
    });

    const menuClass = cn('toggle-list__menu', {
        open: open
    });
    return (
        <div className='toggle-list'>
            <button
                type='button'
                className={buttonClass}
                onClick={() => setOpen(!open)}
            >
                <div>{label}</div>
                <div
                    className={cn('toggle-list__button__icon', { open: open })}
                >
                    <Icon
                        width={24}
                        icon={
                            open
                                ? 'arrow-bottom-input-accent'
                                : 'arrow-bottom-input'
                        }
                    />
                </div>
            </button>
            <div className={menuClass}>{children}</div>
        </div>
    );
});
