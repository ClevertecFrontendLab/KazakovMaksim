import { FormControl, FormLabel, Switch as ChakraSwitch, Text } from '@chakra-ui/react';

export const Switch = () => (
    <FormControl display='flex' alignItems='center' justifyContent='center'>
        <FormLabel htmlFor='allergen' mb='0' pl={2} whiteSpace='nowrap'>
            <Text>Исключить мои аллергены</Text>
        </FormLabel>
        <ChakraSwitch id='allergen' colorScheme='blackAlpha' />
    </FormControl>
);
