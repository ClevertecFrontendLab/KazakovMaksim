import { Tab, TabIndicator, TabList, TabPanels, Tabs } from '@chakra-ui/react';

import { menuData } from '~/constants/mockData';

export const MenuTabs = () => (
    <Tabs defaultIndex={2} variant='unstyled'>
        <TabList>
            {menuData.veganCuisine.categoryItems.map((menuItem, index) => (
                <Tab
                    _selected={{
                        color: 'lime.600',
                    }}
                    key={index}
                    fontWeight='500'
                    color='lime.800'
                >
                    {menuItem}
                </Tab>
            ))}
        </TabList>
        <TabIndicator mt='-1.5px' height='2px' bg='lime.600' borderRadius='1px' />
        <TabPanels></TabPanels>
    </Tabs>
);
