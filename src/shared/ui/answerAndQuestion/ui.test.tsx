import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { AnswerAndQuestion } from './ui';

describe('AnswerAndQuestion ui', () => {
    const question = 'Question';
    const answer = 'Answer';
    //snapshot test
    it('match snapshot', () => {
        const { asFragment } = render(
            <AnswerAndQuestion question={question} answer={answer} />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    //1 тест
    it('render question visible and answer hidden', () => {
        render(<AnswerAndQuestion question={question} answer={answer} />);
        //Проверяем, что вопрос отображается
        expect(screen.getByText(question)).toBeInTheDocument();
        //Проверяем, что ответ скрыт
        expect(screen.queryByText(answer)).toBeNull();
    });
    //2 тест
    test('shows answer when button is clicked', () => {
        render(<AnswerAndQuestion question={question} answer={answer} />);
        //Находим кнопку и кликаем
        const button = screen.getByRole('button');
        fireEvent.click(button);
        //Проверяем, что ответ отображается
        expect(screen.getByText(answer)).toBeInTheDocument();
    });
    //3 тест
    test('question is hidden when button is clicked again', () => {
        render(<AnswerAndQuestion question={question} answer={answer} />);
        //Находим кнопку и кликаем
        const button = screen.getByRole('button');
        fireEvent.click(button);
        screen.debug();
        //Проверяем, что ответ открылся
        expect(screen.getByText(answer)).toBeInTheDocument();
        //Кликаем еще раз по кнопке
        fireEvent.click(button);
        screen.debug();
        //Проверяем, что ответ скрывается
        expect(screen.queryByText(answer)).not.toBeInTheDocument();
    });
});
