import { Checkbox } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    title: 'Checkbox',
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        children: 'Checkbox'
    }
};
