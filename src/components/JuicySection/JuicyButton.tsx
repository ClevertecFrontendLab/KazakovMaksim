import { Button, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router';

import { ArrowIcon } from '~/components/icons';
import { ROUTE_CONSTANTS } from '~/constants/routes';

interface JuicyButtonProps {
    type: 'desktop' | 'mobile';
}

export const JuicyButton: FC<JuicyButtonProps> = ({ type }) => {
    const isTablet = useBreakpointValue({
        base: true,
        md: true,
        xl: false,
    });
    const navigate = useNavigate();

    let isVisible: boolean;

    if (type === 'mobile') {
        isVisible = isTablet ? true : false;
    } else {
        isVisible = isTablet ? false : true;
    }

    return (
        <Button
            onClick={() => navigate(ROUTE_CONSTANTS.JUICY)}
            visibility={isVisible ? 'visible' : 'hidden'}
            data-test-id={type === 'desktop' ? 'juiciest-link' : 'juiciest-link-mobile'}
            variant='blogButton'
            top='0'
            right='0'
            m={isTablet ? '12px auto 0' : 'initial'}
            pos={isTablet ? 'static' : 'absolute'}
            rightIcon={<ArrowIcon direction='right' size={16} color='black' />}
            bg='lime.400'
            h={isTablet && type === 'desktop' ? '0' : 'initial'}
            p={isTablet && type === 'desktop' ? '0' : '8px 16px'}
        >
            Вся подборка
        </Button>
    );
};
