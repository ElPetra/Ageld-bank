import './styles.scss';
import { FiltersCardBar } from 'src/widgets/cards/ui/filter';

import { CardType, PaymentType } from 'src/widgets/cards/lib/index.js';

interface Props {
    setPayment: (value: PaymentType) => void;
    setType: (value: CardType) => void;
}

export const Filters = ({ setType, setPayment }: Props) => {
    return (
        <nav className='filters'>
            <FiltersCardBar current='type' setCurrent={setType} />
            <FiltersCardBar current='payment' setCurrent={setPayment} />
        </nav>
    );
};
