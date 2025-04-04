import './index.css';

import { extendTheme } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { App } from '~/app/App.tsx';
import { ErrorBoundary } from '~/components/ErrorBoundary/ErrorBoundary';
import { PageError } from '~/components/PageError';
import { store } from '~/store/configure-store.ts';

const theme = extendTheme({
    colors: {
        lime: {
            50: '#ffffd3',
            150: '#d7ff94',
            300: '#c4ff61',
            600: '#2db100',
        },
    },
    fonts: {
        main: 'Inter, sans-serif',
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
                    <ErrorBoundary fallback={<PageError />}>
                        <App />
                    </ErrorBoundary>
                </BrowserRouter>
            </ChakraProvider>
        </Provider>
    </StrictMode>,
);
