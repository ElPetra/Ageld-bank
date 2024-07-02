import { Switcher } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Switcher> = {
    component: Switcher,
    title: 'Switcher',
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Switcher>;

export const Default: Story = {
    args: {
        children: 'Switcher'
    }
};
