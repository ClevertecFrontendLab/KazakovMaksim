import { Tab, TabIndicator, TabList, TabPanels, Tabs } from '@chakra-ui/react';

import { menuData } from '~/constants/mockData';

export const MenuTabs = () => (
    <Tabs
        defaultIndex={2}
        variant='unstyled'
        pos='absolute'
        top='0'
        left='50%'
        transform='translateX(-50%)'
        whiteSpace='nowrap'
    >
        <TabList>
            {menuData.veganCuisine.categoryItems.map((menuItem, index) => (
                <Tab
                    fontSize={{ base: '14px', md: '14px', lg: '16px' }}
                    lineHeight={{ base: '1.43', md: '1.43', lg: '1.5' }}
                    _selected={{
                        color: 'lime.600',
                    }}
                    key={index}
                    fontWeight='500'
                    color='lime.800'
                    whiteSpace='nowrap'
                    p={{ base: '4px 16px', md: '4px 16px', lg: '8px 16px' }}
                >
                    {menuItem}
                </Tab>
            ))}
        </TabList>
        <TabIndicator
            mt={{ base: '0', md: '0', lg: '-1.5px' }}
            height='2px'
            bg='lime.600'
            borderRadius='1px'
        />
        <TabPanels></TabPanels>
    </Tabs>
);
