import { HStack, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';

interface HCardBadgeProps {
    text: string;
    imgSrc: string;
}

export const HCardBadge: FC<HCardBadgeProps> = ({ text, imgSrc }) => {
    const isHidden = useBreakpointValue({
        base: true,
        lg: true,
        xl: false,
    });

    if (isHidden) return null;

    return (
        <HStack
            p={{ base: '2px 4px', md: '2px 4px', xl: '4px 8px' }}
            gap={{ base: '0.5', md: '0.5', xl: '2' }}
            bg='lime.150'
            borderRadius='base'
            pos='absolute'
            bottom='5'
            left='6'
        >
            <Image w='16px' h='16px' src={imgSrc} alt={text} />
            <Text variant='cardText' whiteSpace='nowrap'>
                {text} рекомендует
            </Text>
        </HStack>
    );
};
