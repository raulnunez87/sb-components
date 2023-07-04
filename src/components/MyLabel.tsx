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
}
export const MyLabel = ({
    label = 'No Label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor = '',
    ...props
}: MyLabelProps) => {
    return (
        <span
            className={['label', `${ size }`, `text-${color}` ].join(' ')}
            style={{ color: fontColor }}
            {...props}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    );
};