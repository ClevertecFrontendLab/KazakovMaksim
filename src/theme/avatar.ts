import { avatarAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    avatarAnatomy.keys,
);

const superSm = defineStyle({
    width: '40px',
    height: '40px',
    fontSize: '6xl',
});

const sizes = {
    superSm: definePartsStyle({ container: superSm }),
};

export const avatarTheme = defineMultiStyleConfig({ sizes });
