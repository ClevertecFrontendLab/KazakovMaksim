import {
    Card,
    CardBody,
    Heading,
    HStack,
    Image,
    Text,
    useBreakpointValue,
    useMediaQuery,
    VStack,
} from '@chakra-ui/react';
import { FC } from 'react';

import { CardBadge } from '~/components/ProductCard/CardBadge';
import { ProfileNotifications } from '~/components/ProfileNotifications';
import { ProductCardProps } from '~/types';

export const ProductCard: FC<ProductCardProps> = ({
    productTitle,
    productDesc,
    imgSrc,
    profileNotifications = null,
    category,
    withImg = true,
}) => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    const [isLessThan767] = useMediaQuery('(max-width: 767px)');
    const showCardDesc = !isTablet || !withImg;

    return (
        <Card
            boxShadow='none'
            boxSizing='border-box'
            flexShrink='0'
            flexBasis={isLessThan767 ? '100%' : 'initial'}
            flexGrow='1'
            maxW={{
                base: `${withImg ? '158px' : 'initial'}`,
                md: `${withImg ? '158px' : '232px'}`,
                lg: `${withImg ? '277px' : '100%'}`,
                xl: `${withImg ? '277px' : '283px'}`,
                '2xl': '322px',
            }}
        >
            <CardBody
                p='0'
                w='100%'
                border='1px solid'
                borderColor='blackAlpha.200'
                borderRadius='8px'
                overflow='hidden'
            >
                {withImg && <Image src={imgSrc} alt={`${productTitle} фото`} />}
                <VStack
                    alignItems='stretch'
                    p={{
                        base: `${withImg ? '7px 8px 3px 8px' : '11px'}`,
                        xl: `${withImg ? '11px' : '16px'}`,
                        '2xl': `${withImg ? '16px' : '24px'} 19px 19px`,
                    }}
                >
                    <Heading
                        as='h4'
                        variant='cardTitle'
                        noOfLines={isTablet ? 2 : undefined}
                        whiteSpace={isTablet ? undefined : 'nowrap'}
                    >
                        {productTitle}
                    </Heading>
                    {showCardDesc && (
                        <Text variant='cardText' noOfLines={3}>
                            {productDesc}
                        </Text>
                    )}
                    <HStack
                        pt={{
                            base: `${withImg ? '0' : '20px'}`,
                            md: `${withImg ? '0' : '20px'}`,
                            lg: '5',
                        }}
                        justifyContent='space-between'
                    >
                        <CardBadge
                            text={category.name}
                            imgSrc={category.imgSrc}
                            absolute={isTablet && withImg}
                            color={withImg ? undefined : 'lime.50'}
                        />
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
