import { Select } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Select> = {
    component: Select,
    title: 'Select',
    tags: ['autodocs'],
    argTypes: {
        options: {
            description: 'Варианты выбора'
        },
        variant: {
            description: 'Вариант цвета',
            defaultValue: { summary: 'primary' }
        },
        label: {
            description: 'Название'
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
        }
    }
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    args: {
        options: [
            { value: 'Variant 1', label: 'Variant 1' },
            { value: 'Variant 2', label: 'Variant 2' },
            { value: 'Variant 3', label: 'Variant 3' },
            { value: 'Variant 4', label: 'Variant 4' },
            { value: 'Variant 5', label: 'Variant 5' }
        ],
        variant: 'primary',
        label: 'Выберите',
        width: 'auto',
        isError: false,
        error: ''
    }
};
