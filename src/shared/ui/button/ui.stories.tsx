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
            description: 'Стандартный type кнопки',
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
        disabled: {
            description: 'Недоступность',
            defaultValue: { summary: 'false' }
        },
        width: {
            description: 'Ширина кнопки, либо стандарт, либо 100% от родителя',
            defaultValue: { summary: 'auto' }
        },
        status: {
            description: 'Можно сделать кнопку принудительно активной'
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
        disabled: false,
        width: 'auto',
        status: undefined,
        children: 'Action'
    }
};
