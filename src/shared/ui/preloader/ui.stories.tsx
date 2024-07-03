import { Preloader } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Preloader> = {
    component: Preloader,
    title: 'Preloader',
    tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Preloader>;

export const Default: Story = {
    args: {}
};
