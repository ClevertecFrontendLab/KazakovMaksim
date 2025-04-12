import { Box, Button, Heading, HStack, useBreakpointValue } from '@chakra-ui/react';

import { ArrowIcon } from '~/components/icons';
import { ProductHCard } from '~/components/ProductHCard';
import { mockProductHCards } from '~/constants/mockData';

export const JuicySection = () => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        xl: false,
    });

    return (
        <Box alignSelf='stretch' position='relative'>
            <HStack justifyContent='space-between' mb={{ base: '3', xl: '4', '2xl': '6' }}>
                <Heading variant='sectionTitle' as='h3'>
                    Самое сочное
                </Heading>
            </HStack>
            <HStack
                justifyContent='center'
                flexWrap='wrap'
                gap={{ base: '3', md: '3.5', '2xl': '6' }}
            >
                {mockProductHCards.map((mockProductHCard) => (
                    <ProductHCard key={mockProductHCard.productTitle} {...mockProductHCard} />
                ))}
            </HStack>
            <Button
                top='0'
                right='0'
                m={isTablet ? '12px auto 0' : 'initial'}
                pos={isTablet ? 'static' : 'absolute'}
                display={isTablet ? 'block' : 'initial'}
                h='initial'
                p={{ base: '8px 16px', xl: '8px 16px', '2xl': '10px 24px' }}
                rightIcon={<ArrowIcon direction='right' size={16} color='black' />}
                lineHeight={{ base: '1.5', xl: '1.5', '2xl': '1.56' }}
                fontSize={{ base: '16px', xl: '16px', '2xl': '18px' }}
                bg='lime.400'
            >
                Вся подборка
            </Button>
        </Box>
    );
};
