import { Center, Image, Link, Text, VStack } from '@chakra-ui/react';

import imgSrc from '~/assets/img/not-found.jpg';

export const NotFoundPage = () => (
    <Center paddingTop='300px'>
        <VStack spacing='32px'>
            <Image src={imgSrc} alt='not-found-img' />
            <VStack spacing='16px'>
                <Text fontSize='2xl' fontWeight='700' lineHeight={1.33}>
                    Упс! Такой страницы нет
                </Text>
                <Text fontSize='md' lineHeight={1.5} color='rgba(0, 0, 0, 0.64)'>
                    Можете поискать другой рецепт{' '}
                    <Link href='#'>
                        <Text as='span' decoration='underline'>
                            здесь.
                        </Text>
                    </Link>
                </Text>
            </VStack>
        </VStack>
    </Center>
);
