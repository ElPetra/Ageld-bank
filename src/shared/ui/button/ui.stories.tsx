import { Button } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'Тип',
            defaultValue: { summary: 'button' }
        },
        size: {
            description: 'Размер',
            defaultValue: { summary: 'medium' }
        },
        variant: {
            description: 'Вариант цветовой схемы',
            defaultValue: { summary: 'primary' }
        },
        width: {
            description: 'Ширина',
            defaultValue: { summary: 'auto' }
        },
        disabled: {
            description: 'Заблокированный'
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        type: 'button',
        size: 'medium',
        variant: 'primary',
        width: 'auto',
        disabled: false,
        children: 'Action'
    }
};
