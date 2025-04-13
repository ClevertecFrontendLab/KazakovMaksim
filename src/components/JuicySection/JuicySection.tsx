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
            <Heading variant='sectionTitle' as='h3' mb={{ base: '3', xl: '4', '2xl': '6' }}>
                Самое сочное
            </Heading>
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
                variant='blogButton'
                top='0'
                right='0'
                m={isTablet ? '12px auto 0' : 'initial'}
                pos={isTablet ? 'static' : 'absolute'}
                rightIcon={<ArrowIcon direction='right' size={16} color='black' />}
                bg='lime.400'
            >
                Вся подборка
            </Button>
        </Box>
    );
};
