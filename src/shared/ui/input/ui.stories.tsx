import { Input } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Input',
    tags: ['autodocs'],
    argTypes: {
        label: {
            description: 'Название'
        },
        size: {
            description: 'Размер',
            defaultValue: { summary: 'medium' }
        },
        width: {
            description: 'Ширина',
            defaultValue: { summary: 'auto' }
        },
        isError: {
            description: 'Флаг ошибки'
        },
        error: {
            description: 'Текст ошибки'
        },
        disabled: {
            description: 'Заблокированный'
        },
        value: {
            description: 'Значение'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Номер телефона',
        size: 'large',
        width: 'auto',
        isError: false,
        error: '',
        disabled: false,
        value: '+7 (999) 999-99-99'
    }
};
