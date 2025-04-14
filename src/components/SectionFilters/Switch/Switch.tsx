import { FormControl, FormLabel, Switch as ChakraSwitch } from '@chakra-ui/react';

export const Switch = () => (
    <FormControl display='flex' alignItems='center'>
        <FormLabel htmlFor='allergen' mb='0' pl={2}>
            Исключить мои аллергены
        </FormLabel>
        <ChakraSwitch id='allergen' colorScheme='blackAlpha' />
    </FormControl>
);
