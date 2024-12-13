import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { AnswerAndQuestionPage } from './index';

// Мокирование translate функции
jest.mock('react-i18next', () => ({
    useTranslation: jest.fn()
}));

// Мокирование useNavigate
jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn()
}));

// Мокируем дочерние компоненты
jest.mock('./general-questions', () => ({
    GeneralQuestions: () => <div>General Questions Content</div>
}));
jest.mock('./about-cards', () => ({
    AboutCards: () => <div>About Cards Content</div>
}));
jest.mock('./about-credits', () => ({
    AboutCredits: () => <div>About Credits Content</div>
}));
jest.mock('./about-deposits', () => ({
    AboutDeposits: () => <div>About Deposits Content</div>
}));
jest.mock('./about-insurance', () => ({
    AboutInsurance: () => <div>About Insurance Content</div>
}));
jest.mock('src/features/multi-step-form', () => ({
    BackButton: () => <button>Back</button>
}));

describe('AnswerAndQuestionPage', () => {
    const t = jest.fn(key => key); // Мокирование функции перевода

    beforeEach(() => {
        (useTranslation as jest.Mock).mockReturnValue({ t });
        (useNavigate as jest.Mock).mockReturnValue(jest.fn());
    });
    //проверяем, что компонент рендерится правильно и отображает содержимое по умолчанию ('О картах')
    it('matches snapshot', () => {
        const { asFragment } = render(<AnswerAndQuestionPage />);
        expect(asFragment()).toMatchSnapshot();
    });
    test('renders the component and shows default content', () => {
        render(<AnswerAndQuestionPage />);

        expect(
            screen.getByText('Часто задаваемые вопросы')
        ).toBeInTheDocument();
        screen.debug();
        expect(screen.getByText('О картах')).toBeInTheDocument();
        expect(screen.getByText('About Cards Content')).toBeInTheDocument();
        expect(screen.queryByText('General Questions Content')).toBeNull();
        expect(screen.queryByText('About Credits Content')).toBeNull();
        expect(screen.queryByText('About Deposits Content')).toBeNull();
        expect(screen.queryByText('About Insurance Content')).toBeNull();
    });
    //проверяем, что компонент меняет содержимое при клике на кнопку
    test('changes content when corresponding button is clicked', () => {
        render(<AnswerAndQuestionPage />);

        fireEvent.click(screen.getByText('Общие вопросы'));
        expect(
            screen.getByText('General Questions Content')
        ).toBeInTheDocument();
        expect(screen.queryByText('About Cards Content')).toBeNull();

        fireEvent.click(screen.getByText('О кредитах'));
        expect(screen.getByText('About Credits Content')).toBeInTheDocument();
        expect(screen.queryByText('General Questions Content')).toBeNull();
        expect(screen.queryByText('About Cards Content')).toBeNull();
        expect(screen.queryByText('About Deposits Content')).toBeNull();
        expect(screen.queryByText('About Insurance Content')).toBeNull();
    });
    //проверяем навигацию при клике на страницу контактов
    test('navigates to contacts page when button is clicked', () => {
        const navigate = useNavigate();
        render(<AnswerAndQuestionPage />);

        fireEvent.click(screen.getByText('Выбрать способ связи'));
        expect(navigate).toHaveBeenCalledWith('/contacts');
    });
});
