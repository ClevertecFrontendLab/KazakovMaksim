import { Box, Heading, HStack } from '@chakra-ui/react';

import { JuicyButton } from '~/components/JuicySection/JuicyButton';
import { ProductHCard } from '~/components/ProductHCard';
import { mockProductHCards } from '~/constants/mockData';

export const JuicySection = () => (
    <Box alignSelf='stretch' position='relative'>
        <Heading variant='sectionTitle' as='h3' mb={{ base: '3', xl: '4', '2xl': '6' }}>
            Самое сочное
        </Heading>
        <HStack justifyContent='center' flexWrap='wrap' gap={{ base: '3', md: '3.5', '2xl': '6' }}>
            {mockProductHCards.slice(0, 4).map((mockProductHCard) => (
                <ProductHCard key={mockProductHCard.productTitle} {...mockProductHCard} />
            ))}
        </HStack>
        <JuicyButton type='desktop' />
        <JuicyButton type='mobile' />
    </Box>
);
