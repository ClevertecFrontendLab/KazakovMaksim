import { Box, HStack, useBreakpointValue } from '@chakra-ui/react';

import { ProductCard } from '~/components/ProductCard';
import { SliderButton } from '~/components/RecipeSection/ImageSlider/SliderButton';
import { mockProductCards } from '~/constants/mockData';

export const ImageSlider = () => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    return (
        <Box
            w={isTablet ? 'auto' : 'calc(100vw - 256px * 2 - 24px * 2)'}
            maxW='1360px'
            overflow='hidden'
            pos='relative'
        >
            <HStack spacing={{ base: '3', xl: '3', '2xl': '6' }} alignItems='stretch'>
                {mockProductCards.map((mockProductCard) => (
                    <ProductCard key={mockProductCard.productTitle} {...mockProductCard} />
                ))}
            </HStack>
            {!isTablet && (
                <>
                    <SliderButton />
                    <SliderButton direction='right' />
                </>
            )}
        </Box>
    );
};
