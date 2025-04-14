import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link as ReactRouterLink, useLocation } from 'react-router';

import { getBreadcrumbsFromPathname } from '~/helpers';

export const Breadcrumbs = () => {
    const { pathname } = useLocation();

    const { breadcrumbs, parsedPath } = getBreadcrumbsFromPathname(pathname);

    return (
        <Breadcrumb
            maxW='1152px'
            w='100%'
            color='blackAlpha.700'
            spacing='8px'
            separator={<ChevronRightIcon color='gray.500' />}
        >
            {breadcrumbs.map((bc, index) => (
                <BreadcrumbItem key={bc}>
                    <BreadcrumbLink as={ReactRouterLink} to={parsedPath[index]}>
                        {bc}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};
