import { Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface SectionHeading {
    titleText: string;
    descriptionText?: string;
}

export const SectionHeading: FC<SectionHeading> = ({ titleText, descriptionText }) => (
    <VStack spacing={3} maxW='696px' textAlign='center'>
        <Heading variant='mainTitle'>{titleText}</Heading>
        {descriptionText && <Text variant='titleText'>{descriptionText}</Text>}
    </VStack>
);
