import { Box, Button, Heading, HStack, useBreakpointValue } from '@chakra-ui/react';

import { BlogCard } from '~/components/FoodBlogSection/BlogCard';
import { ArrowIcon } from '~/components/icons';
import { mockBlogCards } from '~/constants/mockData';

export const FoodBlogSection = () => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        xl: false,
    });

    const isWrap = useBreakpointValue({
        base: false,
        sm: true,
        md: false,
        lg: true,
        xl: false,
    });

    return (
        <Box
            alignSelf='stretch'
            position='relative'
            bg='lime.300'
            p={{ base: '3', md: '3', xl: '6' }}
            borderRadius='2xl'
        >
            <Heading variant='blogTitle' as='h3'>
                Кулинарные блоги
            </Heading>
            <HStack
                gap={{ base: '3', md: '3', lg: '4', '2xl': '4' }}
                flexWrap={isWrap ? 'wrap' : 'nowrap'}
            >
                {mockBlogCards.map((card) => (
                    <BlogCard
                        key={card.user.nickname}
                        user={card.user}
                        description={card.description}
                    />
                ))}
            </HStack>
            <Button
                variant='blogButton'
                pos={isTablet ? 'static' : 'absolute'}
                rightIcon={<ArrowIcon direction='right' size={16} color='black' />}
            >
                Все авторы
            </Button>
        </Box>
    );
};
