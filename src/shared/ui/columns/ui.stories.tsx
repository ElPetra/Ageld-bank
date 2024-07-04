import { Columns } from './ui';

import type { Meta, StoryObj } from '@storybook/react';

import 'src/app/styles/reset.scss';
import 'src/app/styles/index.scss';
import './styles.scss';

const meta: Meta<typeof Columns> = {
    component: Columns,
    title: 'Columns',
    tags: ['autodocs'],
    argTypes: {
        number: {
            description: 'Количество колонок',
            defaultValue: { summary: '3' }
        },
        rowGap: {
            description: 'Промежуток'
        },
        align: {
            description: 'Выравнивание'
        },
        children: {
            description: 'Содержимое'
        }
    }
};
export default meta;

type Story = StoryObj<typeof Columns>;

export const Default: Story = {
    args: {
        number: '3',
        rowGap: 'small',
        align: 'left',
        children: (
            <>
                <div>Колонка 1</div>
                <div>Колонка 2</div>
                <div>Колонка 3</div>
                <div>Колонка 4</div>
            </>
        )
    }
};
