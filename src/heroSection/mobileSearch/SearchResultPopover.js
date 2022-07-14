import { SearchIcon } from '@chakra-ui/icons';
import {
	Input,
	InputGroup,
	InputLeftElement,
	Popover,
	PopoverBody,
	PopoverContent,
	PopoverTrigger,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { useRef } from 'react';
import c_list from '../search/list.json';

const SearchResultPopover = ({ location, setLocation }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const initialFocusRef = useRef();
	const ref = useRef();

	return (
		<>
			<Popover
				placement='bottom'
				zIndex={10000}
				isOpen={isOpen}
				onClose={onClose}
				isLazy
				initialFocusRef={initialFocusRef}
			>
				<PopoverTrigger zIndex={10000}>
					{/* <Input
            ref={initialFocusRef}
            value={location}
            textAlign={{
                base: 'center',
                lg: 'start',
            }}
            w='100%'
            fontSize={20}
            type='text'
            placeholder='Destination'
            outline={'none'}
            border='none'
            pl={0}
            pr={0}
            _focus={{ outline: 'none' }}
            pb={{ base: 3, lg: 0 }}
            onChange={(e) => {
                onOpen();
                setLocation(e.target.value);
            }}
            _placeholder={{
                color: '#696969',
            }}
        /> */}
					<InputGroup h='50px'>
						<InputLeftElement
							h='50px'
							pointerEvents='none'
							children={<SearchIcon color='gray.300' />}
						/>
						<Input
							h='50px'
							ref={initialFocusRef}
							type='text'
							placeholder='Search Destination'
							value={location}
							onChange={(e) => {
								onOpen();
								setLocation(e.target.value);
							}}
						/>
					</InputGroup>
				</PopoverTrigger>
				<PopoverContent
					w={'calc(95vw - 55px)'}
					maxH='250px'
					overflowY={'scroll'}
					ref={ref}
					position='relative'
					top='-10px'
					bg='#fffdf7'
				>
					<PopoverBody>
						{c_list
							.filter((val) =>
								val.name.toLowerCase().indexOf(location) !== -1
									? true
									: false
							)
							.map((loc, index) => {
								return (
									<Text
										px='10px'
										_hover={{
											background: 'rgba(0,0,0,.1)',
											cursor: 'pointer',
										}}
										key={index}
										onClick={() => {
											setLocation(loc.name);
											onClose();
										}}
									>
										{loc.name}
									</Text>
								);
							}).length !== 0 ? (
							c_list
								.filter((val) =>
									val.name.toLowerCase().indexOf(location) !==
									-1
										? true
										: false
								)
								.map((loc, index) => {
									return (
										<Text
											px='10px'
											_hover={{
												background: 'rgba(0,0,0,.1)',
												cursor: 'pointer',
											}}
											key={index}
											onClick={() => {
												setLocation(loc.name);
												onClose();
											}}
										>
											{loc.name}
										</Text>
									);
								})
						) : (
							<Text px='10px'>No Matches Found</Text>
						)}
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
};

export default SearchResultPopover;
