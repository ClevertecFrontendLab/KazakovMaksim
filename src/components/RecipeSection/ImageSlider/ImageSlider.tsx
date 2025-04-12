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

    const paddings = useBreakpointValue({
        base: '32px', // 16px * 2
        md: '40px', // 20px * 2
        lg: '560px', // 256px * 2 + 24px * 2
    });

    return (
        <Box w={`calc(100vw - ${paddings})`} maxW='1360px' overflow='hidden' pos='relative'>
            <HStack spacing={{ base: '3', '2xl': '6' }} alignItems='stretch'>
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
