import {
    Card,
    CardBody,
    Heading,
    HStack,
    Image,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { FC } from 'react';

import { CardBadge } from '~/components/ProductCard/CardBadge';
import { ProfileNotifications } from '~/components/ProfileNotifications';
import { ProfileNotificationsI } from '~/types';

interface CategoryItem {
    name: string;
    imgSrc: string;
}

interface ProductCardProps {
    productTitle: string;
    productDesc: string;
    imgSrc: string;
    profileNotifications?: ProfileNotificationsI;
    category: CategoryItem;
}

export const ProductCard: FC<ProductCardProps> = ({
    productTitle,
    productDesc,
    imgSrc,
    profileNotifications = null,
    category,
}) => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    return (
        <Card boxShadow='none' boxSizing='border-box' flexShrink='0'>
            <CardBody
                p='0'
                maxW={{ base: '158px', md: '158px', lg: '277px', '2xl': '322px' }}
                w='100%'
                border='1px solid'
                borderColor='blackAlpha.200'
                borderRadius='8px'
                overflow='hidden'
            >
                <Image src={imgSrc} alt={`${productTitle} фото`} />
                <VStack
                    alignItems='stretch'
                    p={{ base: '7px 8px 3px 8px', xl: '11px', '2xl': '16px 24px 19px' }}
                >
                    <Heading
                        as='h4'
                        variant='cardTitle'
                        noOfLines={isTablet ? 2 : undefined}
                        whiteSpace={isTablet ? undefined : 'nowrap'}
                    >
                        {productTitle}
                    </Heading>
                    {!isTablet && (
                        <Text variant='cardText' noOfLines={3}>
                            {productDesc}
                        </Text>
                    )}
                    <HStack pt={{ base: '0', md: '0', lg: '5' }} justifyContent='space-between'>
                        <CardBadge text={category.name} imgSrc={category.imgSrc} />
                        <ProfileNotifications
                            iconSize='sm'
                            profileNotifications={profileNotifications || {}}
                        />
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
};
