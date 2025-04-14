import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    HStack,
    IconButton,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { FC } from 'react';

import { BookmarkHeartIcon } from '~/components/icons';
import { CardBadge } from '~/components/ProductCard/CardBadge';
import { HCardBadge } from '~/components/ProductHCard/HCardBadge';
import { ProfileNotifications } from '~/components/ProfileNotifications';
import { CategoryItem, ProductCardProps } from '~/types';

interface RecommendationItem extends CategoryItem {}

type ProductHCardProps = Omit<ProductCardProps, 'withImg'> & {
    recommendation?: RecommendationItem;
};

export const ProductHCard: FC<ProductHCardProps> = ({
    productTitle,
    productDesc,
    imgSrc,
    profileNotifications = null,
    category,
    recommendation,
}) => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        xl: false,
    });

    const isBadgeAbsolute = useBreakpointValue({
        base: true,
        lg: true,
        xl: false,
    });

    return (
        <Card
            direction={{ base: 'column', sm: 'row' }}
            variant='outline'
            maxW={{ base: '328px', md: '356px', lg: '580px', xl: '880px', '2xl': '668px' }}
            w='100%'
            borderRadius='lg'
            overflow='hidden'
        >
            <Image
                objectFit={isTablet ? 'cover' : 'contain'}
                maxW={{ base: '158px', md: '158px', lg: '255px', xl: '346px' }}
                src={imgSrc}
                alt={`${productTitle} фото`}
            />

            <Stack
                h={{ base: '126px', md: '126px', lg: 'initial' }}
                spacing={{ base: '0', md: '0', lg: '6' }}
                p={{ base: '7px 8px 3px 8px', xl: '19px 24px' }}
                maxW={{ base: '323px', lg: '323px', xl: 'initial' }}
                w='100%'
            >
                <CardBody
                    display='flex'
                    flexDirection='column'
                    gap={{ base: '0', md: '0', lg: '24px' }}
                    p='0'
                >
                    <HStack justifyContent='space-between' flexWrap='wrap'>
                        <CardBadge
                            text={category.name}
                            imgSrc={category.imgSrc}
                            absolute={isBadgeAbsolute}
                        />
                        <ProfileNotifications
                            iconSize='sm'
                            profileNotifications={profileNotifications || {}}
                        />
                    </HStack>
                    <VStack alignItems='start'>
                        <Heading
                            maxW={{ base: '158px', md: '158px', lg: '486px', '2xl': '276px' }}
                            as='h4'
                            variant='hCardTitle'
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
                    </VStack>
                </CardBody>

                <CardFooter p='0' justifyContent='end' gap='2' alignItems='center'>
                    {isTablet ? (
                        <IconButton
                            size='xs'
                            variant='outline'
                            aria-label='bookmark'
                            icon={<BookmarkHeartIcon />}
                        />
                    ) : (
                        <Button
                            fontSize='14px'
                            lineHeight='1.43'
                            leftIcon={<BookmarkHeartIcon externalSize={14} />}
                            variant='outline'
                            p='5px 12px'
                            h='initial'
                        >
                            Сохранить
                        </Button>
                    )}
                    <Button variant='cookButton'>Готовить</Button>
                </CardFooter>
            </Stack>

            {recommendation && (
                <HCardBadge text={recommendation.name} imgSrc={recommendation.imgSrc} />
            )}
        </Card>
    );
};
