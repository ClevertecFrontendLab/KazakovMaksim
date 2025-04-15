import { Box, Button, Container, HStack, VStack } from '@chakra-ui/react';

import { MenuTabs } from '~/components/MenuTabs';
import { ProductHCard } from '~/components/ProductHCard';
import { RelevantSection } from '~/components/RelevantSection';
import { SectionFilters } from '~/components/SectionFilters';
import { SectionHeading } from '~/components/SectionHeading';
import { mockProductHCards } from '~/constants/mockData';

const mockSectionHeading = {
    titleText: 'Веганская кухня',
    descriptionText:
        'Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.',
};

const VeganCuisinePage = () => (
    <Container
        m='0 auto'
        as='section'
        maxW={{ lg: '1408px', md: 'none' }}
        px={{ base: '16px', md: '20px', lg: '24px' }}
        pt={{ base: '80px', lg: '112px' }}
        pb={{ base: '100px', md: '100px', lg: '0' }}
    >
        <VStack as='section' flexGrow='1' gap='8'>
            <VStack pb='0' gap={{ base: '4', md: '4', lg: '8' }} w='100%'>
                <SectionHeading {...mockSectionHeading} spacing={4} />
                <SectionFilters />
            </VStack>
            <VStack gap='6'>
                <Box
                    w={{ base: '100vw', md: '100vw', lg: 'calc(100vw - 256px *2 - 24px *2)' }}
                    maxW='100vw'
                    overflow='hidden'
                    pos='relative'
                    h={{ base: '30px', md: '30px', lg: '40px' }}
                >
                    <MenuTabs />
                </Box>
                <VStack gap='4'>
                    <HStack
                        justifyContent='center'
                        flexWrap='wrap'
                        columnGap={{ base: '3', md: '4', '2xl': '6' }}
                        rowGap={{ base: '3', md: '4', '2xl': '4' }}
                    >
                        {mockProductHCards.map((mockProductHCard) => (
                            <ProductHCard
                                key={mockProductHCard.productTitle}
                                {...mockProductHCard}
                            />
                        ))}
                    </HStack>
                    <Button bg='lime.400' lineHeight='1.5'>
                        Загрузить еще
                    </Button>
                </VStack>
            </VStack>
            <Box pt={{ md: '0', lg: '2' }}>
                <RelevantSection />
            </Box>
        </VStack>
    </Container>
);

export default VeganCuisinePage;
