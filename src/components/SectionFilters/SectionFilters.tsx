import { HStack, VStack } from '@chakra-ui/react';

import { MultipleSelect } from '~/components/SectionFilters/MultipleSelect';
import { SearchBar } from '~/components/SectionFilters/SearchBar';
import { Switch } from '~/components/SectionFilters/Switch';

export const SectionFilters = () => (
    <VStack w='100%' spacing='16px'>
        <SearchBar />
        <HStack maxW='518px' w='100%' spacing='16px'>
            <Switch />
            <MultipleSelect />
        </HStack>
    </VStack>
);
