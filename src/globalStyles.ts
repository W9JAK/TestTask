import { globalCss } from './stitches.config';

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: '$body', // Apply the Rubik font to all elements
    },
    body: {
        fontFamily: '$body',
        backgroundImage: 'linear-gradient(to bottom, rgba(242, 202, 174, 1), rgba(250, 220, 199, 1))',
        color: '$text',
        width: '100%',
        height: '100%',
    },
});
