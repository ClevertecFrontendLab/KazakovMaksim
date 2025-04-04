import { Button, Center, Text, VStack } from '@chakra-ui/react';

import { UNEXPECTED_ERROR_MESSAGE } from '~/constants/errorMessages';

export const PageError = () => {
    const reloadPage = () => {
        location.reload();
    };

    return (
        <Center h='100vh'>
            <VStack spacing={4}>
                <Text>{UNEXPECTED_ERROR_MESSAGE}</Text>
                <Button onClick={reloadPage}>обновить страницу</Button>
            </VStack>
        </Center>
    );
};
