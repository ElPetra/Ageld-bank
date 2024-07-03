import { Container } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Container> = {
    component: Container,
    title: 'Container',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'Вариант цвета',
            defaultValue: { summary: 'primary' }
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
    args: {
        variant: 'primary',
        children: 'Контейнер'
    }
};
