import { Box, IconButton, Text } from '@chakra-ui/react';

import { WriteRecipeIcon } from '~/components/icons';

export const WriteRecipeButton = () => (
    <Box
        pos='relative'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='208px'
        height='208px'
        background='radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
    >
        <IconButton
            borderRadius='50px'
            padding='0px 12px'
            width='48px'
            height='48px'
            aria-label='write recipe'
            bg='black'
            icon={<WriteRecipeIcon />}
        />
        <Text
            w='192px'
            pos='absolute'
            bottom='52px'
            left='8px'
            fontSize='12px'
            lineHeight='1.33'
            color='blackAlpha.700'
            textAlign='center'
        >
            Записать рецепт
        </Text>
    </Box>
);
