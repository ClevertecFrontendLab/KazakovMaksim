import { Link as ChakraLink, ListItem } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as ReactRouterLink } from 'react-router';

import { ROUTE_CONSTANTS } from '~/constants/routes';

const pseudoElem = {
    content: '""',
    position: 'absolute',
    top: '6px',
    left: '41px',
    width: '1px',
    height: '24px',
    background: 'lime.300',
    zIndex: -1,
};

interface MenuListItemProps {
    item: string;
}

export const MenuListItem: FC<MenuListItemProps> = ({ item }) => (
    <ListItem
        pos='relative'
        _before={pseudoElem}
        paddingBlock='6px'
        pl='52px'
        cursor='pointer'
        _hover={{
            background: 'lime.50',
        }}
    >
        <ChakraLink
            as={ReactRouterLink}
            to={ROUTE_CONSTANTS.VEGAN_CUISINE}
            _hover={{
                textDecoration: 'none',
            }}
        >
            {item}
        </ChakraLink>{' '}
    </ListItem>
);
