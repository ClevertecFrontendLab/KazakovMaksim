import { Box, Button, Container, HStack, VStack } from '@chakra-ui/react';

import { ProductHCard } from '~/components/ProductHCard';
import { RelevantSection } from '~/components/RelevantSection';
import { SectionFilters } from '~/components/SectionFilters';
import { SectionHeading } from '~/components/SectionHeading';
import { mockProductHCards } from '~/constants/mockData';

const mockSectionHeading = {
    titleText: 'Самое сочное',
};

const JuicyPage = () => (
    <Container
        m='0 auto'
        as='section'
        maxW={{ lg: '1408px', md: 'none' }}
        px={{ base: '16px', md: '20px', lg: '24px' }}
        pt={{ base: '96px', lg: '112px' }}
        pb={{ base: '100px', lg: '100px', xl: '0' }}
    >
        <VStack as='section' flexGrow='1' gap='8'>
            <VStack gap='8'>
                <SectionHeading {...mockSectionHeading} />
                <SectionFilters />
            </VStack>
            <VStack gap='4'>
                <HStack
                    justifyContent='center'
                    flexWrap='wrap'
                    gap={{ base: '3', md: '3.5', '2xl': '6' }}
                >
                    {mockProductHCards.map((mockProductHCard) => (
                        <ProductHCard key={mockProductHCard.productTitle} {...mockProductHCard} />
                    ))}
                </HStack>
                <Button bg='lime.400' lineHeight='1.5'>
                    Загрузить еще
                </Button>
            </VStack>
            <Box pt='2'>
                <RelevantSection />
            </Box>
        </VStack>
    </Container>
);

export default JuicyPage;
