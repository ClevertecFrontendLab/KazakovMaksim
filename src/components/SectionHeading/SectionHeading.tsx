import { Heading, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface SectionHeading {
    titleText: string;
    descriptionText?: string;
    spacing?: number;
}

export const SectionHeading: FC<SectionHeading> = ({ titleText, descriptionText, spacing = 3 }) => (
    <VStack spacing={spacing} maxW='696px' textAlign='center'>
        <Heading variant='mainTitle'>{titleText}</Heading>
        {descriptionText && <Text variant='titleText'>{descriptionText}</Text>}
    </VStack>
);
