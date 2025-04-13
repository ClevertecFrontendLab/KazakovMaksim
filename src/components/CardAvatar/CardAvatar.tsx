import { Avatar, HStack, Text, VStack } from '@chakra-ui/react';

import { User } from '~/types';

interface CardAvatarProps {
    user: User;
}

const sizeVariants = {
    base: '32px',
    md: '32px',
    xl: '48px',
};

export const CardAvatar = ({ user }: CardAvatarProps) => {
    const { name, nickname, surname, imgSrc } = user;

    return (
        <HStack spacing={{ base: '8px', md: '8px', xl: '12px' }} maxW='419px' w='100%'>
            <Avatar
                w={sizeVariants}
                h={sizeVariants}
                name={`${name} ${surname}`}
                bg='lime.600'
                src={imgSrc ? imgSrc : ''}
            />
            <VStack align='start' spacing='0'>
                <Text variant='avatarNameText' noOfLines={1}>
                    {name} {surname}
                </Text>
                <Text variant='avatarEmailText'>{nickname} </Text>
            </VStack>
        </HStack>
    );
};
