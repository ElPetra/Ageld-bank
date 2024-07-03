import { Radio } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Radio> = {
    component: Radio,
    title: 'Radio',
    tags: ['autodocs'],
    argTypes: {
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: {
        children: 'Рубли'
    }
};
