import { Box, IconButton, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

interface RoundButtonProps {
    isAsideBtn?: boolean;
    gap?: string;
    bg?: boolean;
    buttonText: string;
    Image: ReactElement;
}

export const RoundButton: FC<RoundButtonProps> = ({
    isAsideBtn = false,
    gap = '1',
    bg = false,
    buttonText,
    Image,
}) => (
    <Box
        flexGrow={isAsideBtn ? 'initial' : '1'}
        flexBasis={isAsideBtn ? 'initial' : '25%'}
        display='flex'
        flexDirection='column'
        gap={gap}
        alignItems='center'
        justifyContent='center'
        width={isAsideBtn ? '208px' : 'auto'}
        height={isAsideBtn ? '208px' : 'auto'}
        background={
            isAsideBtn
                ? 'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
                : 'initial'
        }
    >
        <IconButton
            borderRadius='50px'
            padding='0px 12px'
            width={isAsideBtn ? '48px' : '40px'}
            height={isAsideBtn ? '48px' : '40px'}
            aria-label='write recipe'
            bg={bg ? 'black' : 'transparent'}
            icon={Image}
        />
        <Text
            maxW='192px'
            w='100%'
            bottom='52px'
            left='8px'
            fontSize='12px'
            lineHeight='1.33'
            color='blackAlpha.700'
            textAlign='center'
        >
            {buttonText}
        </Text>
    </Box>
);
