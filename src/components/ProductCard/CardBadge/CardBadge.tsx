import { HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface CardBadgeProps {
    text: string;
    imgSrc: string;
    absolute?: boolean;
    color?: string;
}

export const CardBadge: FC<CardBadgeProps> = ({
    text,
    imgSrc,
    absolute = false,
    color = 'lime.150',
}) => {
    const md = absolute ? '0.5' : '2';

    return (
        <HStack
            p={{ base: '2px 4px', md: '2px 8px' }}
            gap={{ base: md, md: md, xl: '2' }}
            bg={color}
            borderRadius='base'
            pos={absolute ? 'absolute' : 'static'}
            top='2'
            left='2'
        >
            <Image w='16px' h='16px' src={imgSrc} alt={text} />
            <Text variant='cardText' whiteSpace='nowrap'>
                {text}
            </Text>
        </HStack>
    );
};
