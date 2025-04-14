import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { ROUTE_CONSTANTS } from '~/constants/routes';

interface BreadcrumbsProps {
    breadcrumbs: string[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => (
    <Breadcrumb
        maxW='1152px'
        w='100%'
        color='blackAlpha.700'
        spacing='8px'
        separator={<ChevronRightIcon color='gray.500' />}
    >
        {breadcrumbs.map((bc) => (
            <BreadcrumbItem key={bc}>
                <BreadcrumbLink as={ReactRouterLink} to={ROUTE_CONSTANTS.APP}>
                    {bc}
                </BreadcrumbLink>
            </BreadcrumbItem>
        ))}
    </Breadcrumb>
);
