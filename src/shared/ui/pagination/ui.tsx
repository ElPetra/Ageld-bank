import React from 'react';
import { Button } from 'src/shared/ui';

import type { FC } from 'react';
import './styles.scss';

// Определяем пропсы для компонента Pagination
interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export const Pagination: FC<Props> = ({
    currentPage,
    totalPages,
    onPageChange
}) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {currentPage > 1 && (
                    <li>
                        <Button
                            variant='link'
                            onClick={() => onPageChange(currentPage - 1)}
                        >
                            Назад
                        </Button>
                    </li>
                )}

                {pageNumbers.map(number => (
                    <li key={number} className='pagination__item'>
                        <Button
                            variant={
                                number === currentPage ? 'secondary' : 'primary'
                            }
                            onClick={() => onPageChange(number)}
                            width='auto'
                        >
                            {number}
                        </Button>
                    </li>
                ))}

                {currentPage < totalPages && (
                    <li>
                        <Button
                            onClick={() => onPageChange(currentPage + 1)}
                            variant='link'
                        >
                            Вперед
                        </Button>
                    </li>
                )}
            </ul>
        </nav>
    );
};
