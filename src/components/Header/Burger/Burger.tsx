import { Box, Button, VStack } from '@chakra-ui/react';

export const Burger = () => (
    <Button p='12px' bg='transparent' w='48px' h='48px' _hover={{ bg: 'transparent' }}>
        <VStack spacing='3px' p='6px 4px'>
            <Box h={0.5} w={4} bg='black' />
            <Box h={0.5} w={4} bg='black' />
            <Box h={0.5} w={4} bg='black' />
        </VStack>
    </Button>
);
