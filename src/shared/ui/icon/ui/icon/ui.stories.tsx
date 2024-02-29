import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './ui';

const meta: Meta<typeof Icon> = {
    component: Icon,
    title: 'Icon',
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        icon: 'eye-open'
    }
};
