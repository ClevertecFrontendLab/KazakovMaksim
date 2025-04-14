import { HStack, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import { FilterIcon, MagnifierIcon } from '~/components/icons';

export const SearchBar = () => (
    <HStack maxW='518px' w='100%' spacing={3}>
        <IconButton
            size='lg'
            variant='outline'
            aria-label='Search database'
            icon={<FilterIcon />}
        />

        <InputGroup>
            <Input
                h='48px'
                placeholder='Название или ингредиент...'
                fontSize='18px'
                color='lime.800'
                _placeholder={{ color: 'lime.800' }}
            />
            <InputRightElement h='48px' w='48px' pointerEvents='none'>
                <MagnifierIcon />
            </InputRightElement>
        </InputGroup>
    </HStack>
);
