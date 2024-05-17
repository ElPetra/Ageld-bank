import { Link } from 'src/shared/ui';

import type { ReactNode } from 'react';

interface Props {
    link: string;
    children: ReactNode;
}

export const LinkCard = ({ link, children }: Props) => {
    return <>{link ? <Link to={link}>{children}</Link> : children}</>;
};
