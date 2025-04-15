import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Button,
    HStack,
    List,
    ListItem,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';

const mockOptions = [
    { id: 1, optionName: 'Молочные продукты' },
    { id: 2, optionName: 'Яйцо' },
    { id: 3, optionName: 'Рыба' },
    { id: 4, optionName: 'Моллюски' },
    { id: 5, optionName: 'Орехи' },
    { id: 6, optionName: 'Томат (помидор)' },
    { id: 7, optionName: 'Цитрусовые' },
    { id: 8, optionName: 'Клубника (ягоды)' },
    { id: 9, optionName: 'Шоколад' },
];

type mockOption = {
    id: number;
    optionName: string;
};

export function MultipleSelect() {
    const [selectedOption, setSelectedOption] = useState<mockOption | null>(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSelect = (option: mockOption) => {
        setSelectedOption(option);
        onClose();
    };

    return (
        <Popover isOpen={isOpen} onClose={onClose} placement='bottom-start'>
            <PopoverTrigger>
                <Button
                    m='0 auto'
                    variant='outline'
                    onClick={onOpen}
                    maxW='234px'
                    fontWeight='500'
                    color='rgba(0, 0, 0, 0.64)'
                    w='100%'
                    rightIcon={<ChevronDownIcon />}
                >
                    {selectedOption ? selectedOption.optionName : 'Выберите из списка...'}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody p={0}>
                    <List styleType='none' m={0} p={0}>
                        {mockOptions.map((option) => (
                            <HStack key={option.id}>
                                <input type='checkbox' />
                                <ListItem
                                    p={2}
                                    _hover={{ color: 'lime.300' }}
                                    cursor='pointer'
                                    onClick={() => handleSelect(option)}
                                >
                                    {option.optionName}
                                </ListItem>
                            </HStack>
                        ))}
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
}
