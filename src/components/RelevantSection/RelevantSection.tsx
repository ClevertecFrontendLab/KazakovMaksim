import {
    Box,
    Heading,
    HStack,
    Text,
    useBreakpointValue,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react';

import { ProductCard } from '~/components/ProductCard';
import { ShortCard } from '~/components/ShortCard';
import { mockProductCards } from '~/constants/mockData';

export const RelevantSection = () => {
    const isWrap = useBreakpointValue({
        base: true,
        md: false,
        lg: true,
        xl: false,
    });

    const [isLessThan919] = useMediaQuery('(max-width: 919px)');

    return (
        <Box
            alignSelf='stretch'
            position='relative'
            borderTop='1px solid'
            borderColor='blackAlpha.200'
        >
            <HStack
                spacing={{ base: '3', md: '3', xl: '6' }}
                m={{ base: '8px 0 16px', md: '8px 0 16px', xl: '24px 0' }}
                alignItems='start'
                flexWrap={isLessThan919 ? 'wrap' : 'initial'}
            >
                <Heading
                    flexBasis={isLessThan919 ? '100%' : 'initial'}
                    maxW={{ md: 'initial', xl: '283px', '2xl': '668px' }}
                    w='100%'
                    variant='sectionTitle'
                    as='h3'
                >
                    Веганская кухня
                </Heading>
                <Text variant='titleText' color='blackAlpha.700'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
            </HStack>
            <HStack
                spacing={{ base: '3', md: '3', xl: '4', '2xl': '6' }}
                alignItems='stretch'
                flexWrap={isWrap ? 'wrap' : 'nowrap'}
            >
                {mockProductCards.slice(0, 2).map((mockProductCard) => (
                    <ProductCard
                        key={mockProductCard.productTitle}
                        {...mockProductCard}
                        withImg={false}
                    />
                ))}
                <VStack flexGrow='1' spacing={{ base: '3', md: '1.5', xl: '3' }}>
                    {mockProductCards.slice(2, 5).map((mockProductCard) => (
                        <ShortCard
                            key={mockProductCard.productTitle}
                            productTitle={mockProductCard.productTitle}
                            imgSrc={mockProductCard.category.imgSrc}
                        />
                    ))}
                </VStack>
            </HStack>
        </Box>
    );
};
