import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';

import { User } from '~/types';

interface CardAvatarProps {
    user: User;
}

export const CardAvatar = ({ user }: CardAvatarProps) => {
    const { name, nickname, surname, imgSrc } = user;

    return (
        <HStack spacing='12px' maxW='419px' w='100%'>
            <Avatar name={`${name} ${surname}`} bg='green.600' src={imgSrc ? imgSrc : ''} />
            <VStack align='start' spacing='0'>
                <Text fontSize='lg' fontWeight='500' lineHeight={1.56} whiteSpace='nowrap'>
                    {name} {surname}
                </Text>
                <Text fontSize='sm' lineHeight={1.43} color='rgba(0, 0, 0, 0.64)'>
                    {nickname}{' '}
                </Text>
            </VStack>
        </HStack>
    );
};
