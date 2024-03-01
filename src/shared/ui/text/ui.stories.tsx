import { Meta, StoryObj } from '@storybook/react';

import { Text } from './ui';

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
        size: 'm',
        weight: 'medium',
        children: 'Text'
    }
};
