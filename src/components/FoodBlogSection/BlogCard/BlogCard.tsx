import { Card, CardBody, Text } from '@chakra-ui/react';
import { FC } from 'react';

import { CardAvatar } from '~/components/CardAvatar';
import { User } from '~/types';

interface BlogCardProps {
    user: User;
    description: string;
}

export const BlogCard: FC<BlogCardProps> = ({ user, description }) => (
    <Card variant='outline' borderColor='blackAlpha.200' borderRadius='lg'>
        <CardBody p={{ base: '16px', md: '16px', '2xl': '23px' }}>
            <CardAvatar user={user} />
            <Text mt={{ base: '4', md: '4', '2xl': '7' }} variant='cardText' noOfLines={3}>
                {description}
            </Text>
        </CardBody>
    </Card>
);
