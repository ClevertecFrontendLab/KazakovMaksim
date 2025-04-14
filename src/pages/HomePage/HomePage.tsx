import { Container, VStack } from '@chakra-ui/react';

import { FoodBlogSection } from '~/components/FoodBlogSection';
import { JuicySection } from '~/components/JuicySection';
import { RecipeSection } from '~/components/RecipeSection';
import { RelevantSection } from '~/components/RelevantSection';
import { SectionHeading } from '~/components/SectionHeading';

const mockSectionHeading = {
    titleText: 'Приятного аппетита!',
};

const HomePage = () => (
    <Container
        m='0 auto'
        as='section'
        maxW={{ lg: '1408px', md: 'none' }}
        px={{ base: '16px', md: '20px', lg: '24px' }}
        pt={{ base: '96px', lg: '112px' }}
        pb={{ base: '100px', lg: '100px', xl: '0' }}
    >
        <VStack flexGrow='1' gap='0'>
            <SectionHeading {...mockSectionHeading} />
            <VStack spacing={{ base: '8', xl: '10' }}>
                <RecipeSection />
                <JuicySection />
                <FoodBlogSection />
                <RelevantSection />
            </VStack>
        </VStack>
    </Container>
);

export default HomePage;
