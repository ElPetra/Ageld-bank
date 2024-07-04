import { Carousel } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Carousel> = {
    component: Carousel,
    title: 'Carousel',
    tags: ['autodocs'],
    argTypes: {
        cards: {
            description: 'Массив карточек'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
    args: {
        cards: [
            <div key={1}>Карточка 1</div>,
            <div key={2}>Карточка 2</div>,
            <div key={3}>Карточка 3</div>,
            <div key={4}>Карточка 4</div>,
            <div key={5}>Карточка 5</div>
        ]
    }
};
