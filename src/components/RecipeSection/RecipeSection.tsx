import { Box, Heading } from '@chakra-ui/react';

import { ImageSlider } from '~/components/RecipeSection/ImageSlider';

export const RecipeSection = () => (
    <Box alignSelf='stretch'>
        <Heading variant='sectionTitle' as='h3' mb={{ base: '3', lg: '6' }}>
            Новые рецепты
        </Heading>
        <ImageSlider />
    </Box>
);
