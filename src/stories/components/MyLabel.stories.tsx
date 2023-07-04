import type { Meta, StoryObj } from '@storybook/react';

import { MyLabel } from '../../components/MyLabel.tsx';

const meta = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary']},
        fontColor: { control: 'color' },
    },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'My Label',
        size: 'normal',
        allCaps: false,
    },
};

export const AllCaps: Story = {
    args: {
        label: 'My Label',
        size: 'h1',
        allCaps: true,
    },
};

export const Secondary: Story = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'secondary',
    },
};

export const Tertiary: Story = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'tertiary',
    },
};

export const CustomFontColor: Story = {
    args: {
        label: 'My Label',
        size: 'h1',
        fontColor: '#5517ac',
    },
};

// Custom font color
// fontColor: #5517ac
// size: h1