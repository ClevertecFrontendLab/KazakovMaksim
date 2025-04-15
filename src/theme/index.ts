import { extendTheme } from '@chakra-ui/react';

import { avatarTheme } from '~/theme/avatar';
import { buttonTheme } from '~/theme/button';
import { headingTheme } from '~/theme/heading';
import { textTheme } from '~/theme/text';

const breakpoints = {
    sm: '22.5rem', // 360px
    '2sm': '28.75rem', // 460px
    md: '48rem', // 768px
    lg: '57.5rem', // 920px
    xl: '90rem', // 1440px
    '2xl': '120rem', // 1920px
};

const colors = {
    lime: {
        50: '#ffffd3',
        100: '#eaffc7',
        150: '#d7ff94',
        300: '#c4ff61',
        400: '#b1ff2e',
        600: '#2db100',
        800: '#134b00',
    },
};

const fonts = {
    main: 'Inter, sans-serif',
};

const theme = extendTheme({
    colors,
    breakpoints,
    fonts,
    components: {
        Heading: headingTheme,
        Text: textTheme,
        Button: buttonTheme,
        Avatar: avatarTheme,
    },
});

export default theme;
