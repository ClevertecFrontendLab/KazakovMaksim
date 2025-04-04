import { Container } from '@chakra-ui/react';

import AppRouter from '~/app/AppRouter';

export const App = () => (
    <Container maxW='1920px' paddingX='0' fontFamily='main'>
        <AppRouter />
    </Container>
);
