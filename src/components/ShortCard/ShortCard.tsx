import { Button, Heading, HStack, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface ShortCardProps {
    productTitle: string;
    imgSrc: string;
}

export const ShortCard: FC<ShortCardProps> = ({ productTitle, imgSrc }) => (
    <HStack
        alignSelf='stretch'
        p={{ base: '9px 11px', xl: '9px 11px', '2xl': '11px 23px' }}
        border='1px'
        borderColor='blackAlpha.200'
        borderRadius='8px'
        gap={{ base: '2', xl: '2', '2xl': '3' }}
    >
        <Image src={imgSrc} alt={`${productTitle} фото`} />
        <Heading variant='cardTitle' noOfLines={1}>
            {productTitle}
        </Heading>
        <Button variant='cookButtonShort' ml='auto' flexShrink='0'>
            Готовить
        </Button>
    </HStack>
);
