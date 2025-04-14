import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Image,
    Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router';

import { categoryIcons, menuData } from '~/constants/mockData';
import { ROUTE_CONSTANTS } from '~/constants/routes';

import scrollStyles from './CustomScrollStyles';
import { MenuList } from './MenuList/MenuList';

type MenuData = typeof menuData;
type MenuDataKeys = keyof MenuData;

export const Menu = () => (
    <Box
        maxW='256px'
        w='100%'
        borderRadius='12px'
        boxShadow=' 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        padding='10px 4px 8px 10px'
        mb='auto'
    >
        <Accordion
            allowToggle
            maxH='calc(100vh - 80px - 112px - 32px - 24px - 10px - 8px)' // 100vh - header, footer & all paddings
            overflowY='auto'
            sx={scrollStyles}
        >
            {Object.keys(menuData).map((menuItem, index) => {
                const category = menuData[menuItem as MenuDataKeys];

                return (
                    <AccordionItem key={index} maxW='230px' border='none'>
                        <h2>
                            <AccordionButton
                                paddingX='8px'
                                paddingY='12px'
                                _hover={{ bg: 'lime.50' }}
                            >
                                <Box
                                    as='span'
                                    display='flex'
                                    columnGap='12px'
                                    flex='1'
                                    textAlign='left'
                                >
                                    <Image
                                        src={categoryIcons[menuItem as MenuDataKeys]}
                                        alt={menuItem}
                                    />
                                    <ChakraLink
                                        data-test-id={
                                            category.categoryName === 'Веганская кухня'
                                                ? 'vegan-cuisine'
                                                : ''
                                        }
                                        as={ReactRouterLink}
                                        to={ROUTE_CONSTANTS.VEGAN_CUISINE}
                                    >
                                        {category.categoryName}
                                    </ChakraLink>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel p='0'>
                            <MenuList list={category.categoryItems} />
                        </AccordionPanel>
                    </AccordionItem>
                );
            })}
        </Accordion>
    </Box>
);
