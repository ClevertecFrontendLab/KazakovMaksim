import { HStack, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';

interface CardBadgeProps {
    text: string;
    imgSrc: string;
}

export const CardBadge: FC<CardBadgeProps> = ({ text, imgSrc }) => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        lg: false,
    });

    return (
        <HStack
            p={{ base: '2px 4px', md: '2px 4px', xl: '2px 8px' }}
            gap={{ base: '0.5', md: '0.5', xl: '2' }}
            bg='lime.150'
            borderRadius='base'
            pos={isTablet ? 'absolute' : 'static'}
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
