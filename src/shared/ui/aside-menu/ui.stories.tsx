import { AsideMenu } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof AsideMenu> = {
    component: AsideMenu,
    title: 'AsideMenu',
    tags: ['autodocs'],
    argTypes: {
        visible: {
            description: 'Видимость'
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof AsideMenu>;

export const Default: Story = {
    args: {
        visible: false,
        children: 'Меню'
    }
};
