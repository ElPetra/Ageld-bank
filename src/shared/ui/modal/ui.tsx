import { createPortal } from 'react-dom';

import { Text } from '../text';

import './styles.scss';
import { Icon } from '../icon';

interface Props {
    status?: 'success' | 'error';
    messages: string[][];
}

const modalRoot = document.getElementById('root');

export const Modal = ({ status, messages }: Props) => {
    return (
        modalRoot &&
        messages.length !== 0 &&
        createPortal(
            <div className={'modal-box'}>
                {messages.map((message, i) => {
                    if (+message[0] < 300) {
                        status = 'success';
                    } else {
                        status = 'error';
                    }
                    return (
                        <div className={`modal modal_${status}`} key={i}>
                            <button className={'close'}>&#x2715;</button>
                            <Icon
                                icon={`${status}-popup`}
                                widthAndHeight={48}
                            />
                            <Text size={'xs'}>{message[1]}</Text>
                        </div>
                    );
                })}
            </div>,
            modalRoot
        )
    );
};
