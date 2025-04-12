import { Container, VStack } from '@chakra-ui/react';

import { JuicySection } from '~/components/JuicySection';
import { RecipeSection } from '~/components/RecipeSection';
import { SectionHeading } from '~/components/SectionHeading';

const mockSectionHeading = {
    titleText: 'Приятного аппетита!',
};

const HomePage = () => (
    <Container
        as='section'
        maxW={{ lg: '1408px', md: 'none' }}
        px={{ base: '16px', md: '20px', lg: '24px' }}
        pt={{ base: '16px', lg: '32px' }}
        m='0'
        maxH='calc(100vh - 80px)'
        overflowY='auto'
    >
        <VStack flexGrow='1'>
            <SectionHeading {...mockSectionHeading} />
            <VStack spacing={{ base: '8', xl: '8', '2xl': '10' }}>
                <RecipeSection />
                <JuicySection />
            </VStack>
        </VStack>
    </Container>
);

export default HomePage;
