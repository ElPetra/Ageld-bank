import { Icon } from 'src/shared/ui';

import './styles.scss';

interface Props {
    changeRotateByControl: (arrow: 'prev' | 'next') => void;
}

export const CarouselControls = ({ changeRotateByControl }: Props) => {
    return (
        <div className='carousel-controls'>
            <button
                className='carousel-controls__prev'
                onClick={() => changeRotateByControl('prev')}
            >
                <Icon width={40} icon='arrow-button-left' />
            </button>
            <button
                className='carousel-controls__next'
                onClick={() => changeRotateByControl('next')}
            >
                <Icon width={40} icon='arrow-button-right' />
            </button>
        </div>
    );
};
