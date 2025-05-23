import { Icon } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'Icon',
    tags: ['autodocs'],
    argTypes: {
        icon: {
            description: 'Название иконки'
        },
        width: {
            description: 'Ширина',
            defaultValue: { summary: '24' }
        },
        height: {
            description: 'Высота',
            defaultValue: { summary: '24' }
        },
        widthAndHeight: {
            description: 'Ширина и высота',
            defaultValue: { summary: '24' }
        }
    }
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        icon: 'eye-open',
        width: 24,
        height: 24
    }
};
