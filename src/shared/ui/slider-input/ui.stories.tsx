import { SliderInput } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof SliderInput> = {
    component: SliderInput,
    title: 'SliderInput',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'Вариант цвета',
            defaultValue: { summary: 'primary' }
        },
        label: {
            description: 'Заголовок'
        },
        min: {
            description: 'Минимум'
        },
        max: {
            description: 'Максимум'
        },
        unit: {
            description: 'Единица измерения'
        }
    }
};
export default meta;

type Story = StoryObj<typeof SliderInput>;

export const Default: Story = {
    args: {
        variant: 'primary',
        label: 'Сумма депозита',
        min: 1000,
        max: 3600,
        unit: 'RUB'
    }
};
