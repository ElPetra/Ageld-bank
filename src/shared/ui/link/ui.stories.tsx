import { MemoryRouter } from 'react-router-dom';

import { Link } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Link> = {
    component: Link,
    title: 'Link',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'Вариант'
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    render: args => (
        <MemoryRouter>
            <Link {...args}>{args.children}</Link>
        </MemoryRouter>
    ),
    args: {
        variant: 'action',
        children: 'Ссылка'
    }
};
