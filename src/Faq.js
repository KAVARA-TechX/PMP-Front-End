import {
	Box,
	ListItem,
	OrderedList,
	Text,
	UnorderedList,
} from '@chakra-ui/react';
import Footer from './footer/Footer';
import Nav from './nav/Nav';

const Faq = () => {
	return (
		<>
			<Nav />
			<Box>
				<Box bg='#32BAC9' pt={'50px'} pb='100px'>
					<Text
						fontSize={30}
						fontWeight={700}
						color='#222'
						textAlign={'center'}
					>
						Frequently asked questions
					</Text>
				</Box>
				<Text
					mx='15vw'
					px='50px'
					py='50px'
					borderRadius={'10px'}
					border='1px solid rgba(255,255,255,.4)'
					lineHeight={2}
					fontSize={18}
					fontWeight={400}
					textAlign='justify'
					position={'relative'}
					bottom='50px'
					background='#222'
					box-shadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
				>
					<OrderedList spacing={5}>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									How do you stand out from the crowd?
								</Text>
								<UnorderedList fontSize={16}>
									<ListItem>24X7 Assistance</ListItem>
									<ListItem>Easy Pricing</ListItem>
									<ListItem>All Rounder Expertise</ListItem>
									<ListItem>One Stop Shop</ListItem>
								</UnorderedList>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									You are a young company, how do we trust you
									with our holiday ?
								</Text>
								<Text fontSize={16}>
									We have helped more than 10000 travellers
									find their perfect holiday. Not only are the
									satisfied with our services, but have also
									recommended us to others. Why don’t you try
									us and find out for yourself? We assure you
									will love the Plan My Leisure way of
									travelling and keep coming back, wanting for
									more!
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									Can i change the itinerary on mobile ?
								</Text>
								<Text fontSize={16}>
									Yes, you can go ahead change your itinerary
									as well as explore payment options on your
									smartphones just with a click. We are easily
									accessible through phone and can assist you
									just the same.
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									I want a quote on my email, how can I get
									that?
								</Text>
								<Text fontSize={16}>
									All you need to do is send us an email on
									the mentioned email address and you can
									check out quotes easily from your mail.
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									What are the documents that I need to submit
									when initiating a booking?
								</Text>
								<Text fontSize={16}>
									You should keep your passport handy while
									you are at a booking and in addition to
									that, your PAN card. Kindly ensure that you
									type in your names only as per your
									passport.
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									Can i freeze my rates once I have finalized
									the itinerary?
								</Text>
								<Text fontSize={16}>
									Yes, after you have paid a token amount on
									the overall trip, you can definitely freeze
									the rates.
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									Will you be helping me with Visa too?
								</Text>
								<Text fontSize={16}>
									Yes, we will assist you with Visa issuance
									for a fee to ensure all documents are in
									place and correct. Please note that, we do
									not take guarantee of your visa issuance, it
									is solely based on the visa assessing
									officer!
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									I want to cancel my trip due to some
									reasons, but there is no cancel button. How
									can I go about it?
								</Text>
								<Text fontSize={16}>
									Fret not! You can drop us a mail mentioning
									the reason for cancellation and we can take
									it forward from there.
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									How can I get in touch with you during my
									vacation?
								</Text>
								<Text fontSize={16}>
									We provide 24X7 assistance, so you can reach
									out to us directly even from your trip or
									call us on the hotline number provided to
									you at the time of your trip confirmation.
									You can also write to us at the given email
									address.
								</Text>
							</Box>
						</ListItem>
						<ListItem>
							<Box>
								<Text fontWeight={600}>
									Where do I report any issues?
								</Text>
								<Text fontSize={16}>
									You can reach out to our team at
									info@planmyleisure.com and your issues will
									be addressed.
								</Text>
							</Box>
						</ListItem>
					</OrderedList>
				</Text>
			</Box>
			<Footer />
		</>
	);
};

export default Faq;
