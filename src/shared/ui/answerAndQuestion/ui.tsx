import React, { useState } from 'react';

import { Icon } from '../icon';
import './style.scss';

interface Props {
    question: string;
    answer: string;
}

export const AnswerAndQuestion: React.FC<Props> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <div className='block'>
            <div className='question'>
                <p className='question__text'>{question}</p>
                <button className='question__button' onClick={toggleAnswer}>
                    <Icon
                        width={24}
                        icon={isOpen ? 'arrow-up' : 'arrow-down'}
                    />
                </button>
            </div>
            {isOpen && (
                <div className='answer'>
                    <p className='answer__text'>{answer}</p>
                </div>
            )}
        </div>
    );
};
