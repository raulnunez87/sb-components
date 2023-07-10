import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ label, size, color, allCaps, fontColor, backgroundColor, ...props }: import("../../components/MyLabel").MyLabelProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        size: {
            control: string;
            options: string[];
        };
        color: {
            control: string;
            options: string[];
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const CustomFontColor: Story;
export declare const CustomBacgroundColor: Story;
