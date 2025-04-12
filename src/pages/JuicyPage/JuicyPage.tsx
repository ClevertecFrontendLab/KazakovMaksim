import { VStack } from '@chakra-ui/react';

import { SectionFilters } from '~/components/SectionFilters';
import { SectionHeading } from '~/components/SectionHeading';

const mockSectionHeading = {
    titleText: 'Самое сочное',
};

const JuicyPage = () => (
    <VStack as='section' flexGrow='1' paddingBlock='32px' spacing='32px'>
        <SectionHeading {...mockSectionHeading} />
        <SectionFilters />
    </VStack>
);

export default JuicyPage;
