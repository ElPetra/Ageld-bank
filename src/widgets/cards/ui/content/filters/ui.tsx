import './styles.scss';
import { FiltersCardBar } from 'src/widgets/cards/ui/filter/index.js';

export const Filters = ({ setType, setPayment }) => {
    return (
        <nav className='filters'>
            <FiltersCardBar current='type' setCurrent={setType} />
            <FiltersCardBar current='payment' setCurrent={setPayment} />
        </nav>
    );
};
