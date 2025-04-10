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
                <Text variant='avatarNameText'>
                    {name} {surname}
                </Text>
                <Text variant='avatarEmailText'>{nickname} </Text>
            </VStack>
        </HStack>
    );
};
