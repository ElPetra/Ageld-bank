import { Text } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Text> = {
    component: Text,
    title: 'Text',
    tags: ['autodocs'],
    argTypes: {
        tag: {
            description: 'Тег',
            defaultValue: { summary: 'div' }
        },
        size: {
            description: 'Размер',
            defaultValue: { summary: 's' }
        },
        weight: {
            description: 'Жирность',
            defaultValue: { summary: 'regular' }
        },
        color: {
            description: 'Цвет текста'
        },
        align: {
            description: 'Выравнивание',
            defaultValue: { summary: 'left' }
        },
        lineHeight: {
            description: 'Жирность'
        },
        children: {
            description: 'Текст'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        tag: 'div',
        size: 's',
        weight: 'regular',
        align: 'left',
        children: 'Text'
    }
};
