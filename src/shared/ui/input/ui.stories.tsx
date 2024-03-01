import { Meta, StoryObj } from '@storybook/react';

import { Input } from './ui';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Input',
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'Стандартный type input',
            defaultValue: { summary: 'text' }
        },
        label: {
            description: 'Динамический placeholder'
        },
        size: {
            description: 'Размер',
            defaultValue: { summary: 'medium' }
        },
        width: {
            description: 'Ширина кнопки, либо стандарт, либо 100% от родителя',
            defaultValue: { summary: 'auto' }
        },
        error: {
            description: 'Текст ошибки'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        type: 'text',
        placeholder: 'Номер телефона',
        label: 'Номер телефона',
        size: 'large',
        width: 'auto',
        error: 'Ошибка'
    }
};
