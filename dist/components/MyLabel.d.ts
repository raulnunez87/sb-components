import './mylabel.css';
export interface MyLabelProps {
    /**
     * Is this the principal call to action on the page?
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * What color to use
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Label should be Capitalized or not
     */
    allCaps?: boolean;
    /**
     * What color should be used for the label
     */
    fontColor?: string;
    /**
     * What color should be the background for the label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, ...props }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
