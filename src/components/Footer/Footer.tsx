import { Avatar, HStack } from '@chakra-ui/react';

import avatar from '~/assets/img/avatar.jpg';
import { HomeIcon, MagnifierIcon, WriteRecipeIcon } from '~/components/icons';
import { RoundButton } from '~/components/RoundButton';

export const Footer = () => (
    <HStack
        data-test-id='footer'
        as='footer'
        bg='lime.50'
        pos='fixed'
        h='84px'
        right='0'
        left='0'
        bottom='0'
        justifyContent='space-between'
        gap='0'
        maxW='100vw'
    >
        <RoundButton buttonText='Главная' Image={<HomeIcon />} bg />
        <RoundButton buttonText='Поиск' Image={<MagnifierIcon color='black' />} />
        <RoundButton buttonText='Записать' Image={<WriteRecipeIcon color='black' />} />
        <RoundButton buttonText='Мой профиль' Image={<Avatar src={avatar} size='superSm' />} />
    </HStack>
);
