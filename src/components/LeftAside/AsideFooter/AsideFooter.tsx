import { HStack, Link, Text, VStack } from '@chakra-ui/react';

import { ExitIcon } from '~/components/icons';

export const AsideFooter = () => (
    <VStack alignItems='start' fontSize='12px' lineHeight='1.33' spacing='16px' maxW='208px'>
        <Text color='blackAlpha.400'>Версия программы 03.25</Text>
        <Text color='blackAlpha.700'>
            Все права защищены, ученический файл, <br /> ©Клевер Технолоджи, 2025
        </Text>
        <HStack>
            <Link fontWeight='600' display='flex' alignItems='center' gap='6px'>
                <ExitIcon />
                Выйти
            </Link>
        </HStack>
    </VStack>
);
