import { Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useEffect } from 'react';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const Cancellation = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Nav />
			<Box>
				<Box bg='rgba(14, 135, 246,.25)' pt={'50px'} pb='100px'>
					<Text
						fontSize={{ base: 24, lg: 30 }}
						fontWeight={700}
						color='#222'
						textAlign={'center'}
					>
						Cancellation Policy
					</Text>
				</Box>
				<Text
					mx={{ base: '20px', lg: '15vw' }}
					px={{ base: '10px', lg: '50px' }}
					py='50px'
					borderRadius={'10px'}
					border='1px solid rgba(255,255,255,.4)'
					lineHeight={2}
					fontSize={{ base: 14, lg: 16 }}
					fontWeight={400}
					textAlign='justify'
					position={'relative'}
					bottom='50px'
					background='#fffdf7'
					boxShadow={'lg'}
					box-shadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'
				>
					<Text fontWeight={600} pt={10} fontSize={18}>
						General
					</Text>
					<Text>
						The cancellation policy is effective for all vacations
						crafted by PML from 01 September 2019. PML customers
						eligible for refunds will receive the refund amount
						within 90 working days from the date of cancellation or
						when the supplier(s) processes the refund, whichever is
						later. For refunds related to on-trip cancellations,
						customers will receive the refund amount within 90
						working days from the date of their return or when the
						supplier(s) processes the refund, whichever is later.
						For queries/clarifications, please reach out to
						info@planmyleisure.com .
					</Text>
					<Text>
						The Refund amount depicted is subjected to change based
						on international exchange rates , refunds received from
						suppliers and payments received from customers till
						date. Any change in refund amount will be communicated
						to customers by their respective account owners.
					</Text>
					<Text fontWeight={600} pt={10} fontSize={18}>
						Flights
					</Text>
					<UnorderedList>
						<ListItem>
							On cancelling flights marked as “Non-Refundable” on
							the final travel vouchers, customers will be
							eligible for a zero refund.
						</ListItem>
						<ListItem>
							For Flights marked as “Refundable” on the final
							travel vouchers, customers will receive a refund as
							per the details mentioned under the “Cancellation
							Policy” section of the product and also in the final
							itinerary shared over the email.
						</ListItem>
						<ListItem>
							The total refunds for flights may include components
							which vary as per the international exchange rates.
						</ListItem>
						<ListItem>
							PML will not be responsible for
							grounded/cancelled/delayed flights. Any cancellation
							requests for these flights will have to be placed
							with the respective airlines. Realization of refunds
							would be subject to processing by the respective
							airline carrier.
						</ListItem>
						<ListItem>
							The onus is on the customer to ensure that his/her
							passport has a minimum of 1-year validity and is in
							good condition. PML is not liable to refund a
							customer who is not allowed to board the flight
							because of invalid passports (validity expired,
							damaged passports).
						</ListItem>
						<ListItem>
							Customers are expected to reach the airport ahead of
							their boarding time (at least 2 hours prior to
							boarding time). PML is not responsible to refund
							customers (for cases wherein airport transfers are
							not planned by us) who miss their flights owing to
							delayed arrival at the airport.
						</ListItem>
						<ListItem>
							For cases wherein airport transfers are planned by
							PML, flight cancellations due to delayed transfers
							owing to unforeseen circumstances specific to a
							region will not be borne by PML.
						</ListItem>
						<ListItem>
							Details about baggage limitations (cabin and
							check-in) will be furnished as part of the final
							travel vouchers. Additional costs owing to breached
							baggage limits will have to be paid by the customer
							at the time of check-in.
						</ListItem>
						<ListItem>
							Certain flight carriers (LCC like Ryanair, Vueling,
							Voltea etc.) have a mandatory web check-in policy.
							Failure to comply with this could result in an
							additional cost to be paid at the airport. PML is
							not liable to refund customers in such
							circumstances. PML will set meal preferences for
							customers with airline carriers upon request.
						</ListItem>
						<ListItem>
							PML will set meal preferences for customers with
							airline carriers upon request. However, PML has no
							control over the availability and quality of meals
							served on the flight. This will be controlled
							completely by the airline carrier.
						</ListItem>
					</UnorderedList>
					<Text fontWeight={600} pt={10} fontSize={18}>
						Hotels
					</Text>
					<UnorderedList>
						<ListItem>
							On cancelling hotels which have been marked as
							“Non-Refundable” on the final travel vouchers, the
							customer will be eligible for a zero refund.
						</ListItem>
						<ListItem>
							For hotels which have been marked as “Refundable” on
							the final travel vouchers, refunds and their
							timelines will be applicable as mentioned under the
							“Cancellation Policy” section of the product and in
							the final itinerary shared over email.
						</ListItem>
						<ListItem>
							The total refunds for hotels may include components
							which vary with international exchange rates.
						</ListItem>
						<ListItem>
							While PML strives to provide the best hotels with
							world-class amenities, we cannot be held responsible
							for factors such as hotel staff behaviour,
							cleanliness and quality of accommodation. Additional
							costs owing to on-trip room upgrades and additional
							amenities will be borne by the customer. All hotels
							changed on-trip (Hotels booked per itinerary
							cancelled and new hotels booked) will entail a 100%
							cancellation fee.
						</ListItem>
						<ListItem>
							Entertaining early check-in or late check-out
							requests is solely based on the discretion of the
							hotel. PML will not be able to process cancellation
							requests owing to non-availability of these
							requests.
						</ListItem>
					</UnorderedList>
					<Text fontWeight={600} pt={10} fontSize={18}>
						Activities
					</Text>
					<UnorderedList>
						<ListItem>
							On cancelling activities marked as “Non-Refundable”
							on the final travel vouchers, the customer will be
							eligible for a zero refund.
						</ListItem>
						<ListItem>
							For activities, which have been marked as
							“Refundable” on the final travel vouchers, refunds
							and their timelines will be applicable as mentioned
							under the “Cancellation Policy” section of the
							product and in the final itinerary shared over
							email.
						</ListItem>
						<ListItem>
							The total refund for activities may include
							components which vary with international exchange
							rates.
						</ListItem>
					</UnorderedList>
					<Text fontWeight={600} pt={10} fontSize={18}>
						Transfers
					</Text>
					<UnorderedList>
						<ListItem>
							For all transfers, refunds and their timelines will
							be applicable as mentioned under the “Cancellation
							Policy” section of the product and in the final
							itinerary shared over email.
						</ListItem>
						<ListItem>
							The total refunds for transfers may include
							components which vary with international exchange
							rates.
						</ListItem>
					</UnorderedList>
					<Text fontWeight={600} pt={10} fontSize={18}>
						Visa & Insurance
					</Text>
					<UnorderedList>
						<ListItem>
							PML acts as a facilitator for processing Visa
							applications. We will guide customers on Visa
							formalities & Visa documentation for specific
							destinations. The discretion to grant/reject Visa
							rests solely with the concerned embassy and PML will
							not be responsible for rejection of any
							applications. The visa fee is non-refundable in case
							of rejected visa applications.
						</ListItem>
						<ListItem>
							While we strive to provide a seamless Visa
							experience to the customers, PML will not be held
							responsible for unforeseen changes to Visa
							formalities levied by the embassy during the
							document submission and processing phase.
						</ListItem>
						<ListItem>
							Insurance once applied is subject to 100%
							cancellation fee and is non-refundable.
						</ListItem>
					</UnorderedList>
				</Text>
			</Box>
			<Footer />
		</>
	);
};

export default Cancellation;
