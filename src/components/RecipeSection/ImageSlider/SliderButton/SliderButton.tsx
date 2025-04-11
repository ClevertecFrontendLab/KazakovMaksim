import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { ArrowIcon } from '~/components/icons';

interface SliderButtonProps {
    direction?: 'right' | 'left';
}

export const SliderButton: FC<SliderButtonProps> = ({ direction = 'left' }) => (
    <Button
        w={{ base: 10, '2xl': 12 }}
        h={{ base: 10, '2xl': 12 }}
        pos='absolute'
        top={{ base: '149px', '2xl': '147px' }}
        left={direction === 'left' ? '-2' : 'initial'}
        right={direction === 'right' ? '-2' : 'initial'}
        bg='black'
    >
        {direction === 'left' ? <ArrowIcon /> : <ArrowIcon direction='right' />}
    </Button>
);
