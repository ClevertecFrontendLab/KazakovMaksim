import { HStack, useMediaQuery, VStack } from '@chakra-ui/react';

import { MultipleSelect } from '~/components/SectionFilters/MultipleSelect';
import { SearchBar } from '~/components/SectionFilters/SearchBar';
import { Switch } from '~/components/SectionFilters/Switch';

export const SectionFilters = () => {
    const [isLessThan1090] = useMediaQuery('(max-width: 1090px)');
    const [isLargerThan920] = useMediaQuery('(min-width: 920px)');

    return (
        <VStack w='100%' spacing='16px' maxW={{ base: '448px', md: '448px', lg: '518px' }}>
            <SearchBar />
            {isLargerThan920 && (
                <HStack flexWrap={isLessThan1090 ? 'wrap' : 'nowrap'} w='100%' spacing='16px'>
                    <Switch />
                    <MultipleSelect />
                </HStack>
            )}
        </VStack>
    );
};
