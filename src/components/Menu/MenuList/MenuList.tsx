import { List } from '@chakra-ui/react';
import { FC } from 'react';

import { MenuListItem } from '~/components/Menu/MenuListItem/MenuListItem';

interface MenuListProps {
    list: string[];
}

export const MenuList: FC<MenuListProps> = ({ list }) => (
    <List>
        {list.map((item, index) => (
            <MenuListItem key={index} item={item} />
        ))}
    </List>
);
