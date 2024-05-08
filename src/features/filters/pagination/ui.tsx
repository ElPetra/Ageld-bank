import { Button } from 'src/shared/ui';

import './styles.scss';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    pageNumbers: number[];
}
export const Pagination = ({
    currentPage,
    totalPages,
    onPageChange,
    pageNumbers
}: Props) => {
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
