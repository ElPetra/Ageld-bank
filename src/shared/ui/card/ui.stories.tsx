import { Card } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Card> = {
    component: Card,
    title: 'Card',
    tags: ['autodocs'],
    argTypes: {
        color: {
            description: 'Цвет',
            defaultValue: { summary: 'primary' }
        },
        gap: {
            description: 'Промежуток',
            defaultValue: { summary: 'small' }
        },
        borderRadius: {
            description: 'Радиус границы',
            defaultValue: { summary: 'medium' }
        },
        padding: {
            description: 'Внутренний отступ',
            defaultValue: { summary: 'small' }
        },
        direction: {
            description: 'Направление'
        },
        align: {
            description: 'Выравнивание'
        },
        justify: {
            description: 'Выравнивание'
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        color: 'primary',
        gap: 'small',
        borderRadius: 'medium',
        padding: 'small',
        direction: 'row',
        align: 'left',
        children: (
            <>
                <div>Карточка</div>
                <div>Контент</div>
            </>
        )
    }
};
