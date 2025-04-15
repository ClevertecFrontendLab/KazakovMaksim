import {
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useMediaQuery,
} from '@chakra-ui/react';

import { FilterIcon, MagnifierIcon } from '~/components/icons';

export const SearchBar = () => {
    const [isLargerThan920] = useMediaQuery('(min-width: 920px)');

    return (
        <HStack maxW='518px' w='100%' spacing={3}>
            <IconButton
                padding={{ sm: '0', md: '0', lg: '0' }}
                size={{ base: 'sm', md: 'sm', lg: 'lg' }}
                variant='outline'
                aria-label='Search database'
                icon={<FilterIcon />}
            />

            <InputGroup>
                <Input
                    pl={{ base: '12px', md: '12px', lg: '16px' }}
                    h={{ base: '32px', md: '32px', lg: '48px' }}
                    placeholder='Название или ингредиент...'
                    fontSize={{ base: '14px', md: '14px', lg: '18px' }}
                    color='lime.800'
                    _placeholder={{ color: 'lime.800' }}
                />
                <InputRightElement
                    h={{ base: '32px', md: '32px', lg: '48px' }}
                    w={{ base: '32px', md: '32px', lg: '48px' }}
                    pointerEvents='none'
                >
                    <MagnifierIcon color='black' size={isLargerThan920 ? 18 : 14} />
                </InputRightElement>
            </InputGroup>
        </HStack>
    );
};
