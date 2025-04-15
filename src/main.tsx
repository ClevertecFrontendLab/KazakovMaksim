import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import { App } from '~/app/App.tsx';
import { ErrorBoundary } from '~/components/ErrorBoundary/ErrorBoundary';
import { PageError } from '~/components/PageError';
import { store } from '~/store/configure-store.ts';

import theme from './theme';

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
