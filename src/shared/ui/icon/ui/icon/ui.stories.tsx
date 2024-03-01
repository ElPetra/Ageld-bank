import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './ui';

import 'src/app/styles/reset.scss'
import 'src/app/styles/index.scss'

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'Icon',
    tags: ['autodocs'],
    argTypes: {
        width: {
            description: 'Ширина',
            defaultValue: { summary: '24' }
        },
        height: {
            description: 'Высота',
            defaultValue: { summary: '24' }
        },
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
