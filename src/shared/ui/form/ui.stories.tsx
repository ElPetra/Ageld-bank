import { Form } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Form> = {
    component: Form,
    title: 'Form',
    tags: ['autodocs'],
    argTypes: {
        error: {
            description: 'Текст ошибки'
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
    args: {
        error: '',
        children: (
            <>
                <div>Форма</div>
                <div>Инпут</div>
            </>
        )
    }
};
