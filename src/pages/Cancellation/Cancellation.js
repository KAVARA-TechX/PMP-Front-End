import { Box, Text } from '@chakra-ui/react';
import Footer from '../../footer/Footer';
import Nav from '../../nav/Nav';

const Cancellation = () => {
	return (
		<>
			<Nav />
			<Box px='5vw' pt='50px'>
				<Text fontSize={30} fontWeight={700}>
					Cancellation
				</Text>
				<Text
					mt='30px'
					lineHeight={2}
					fontSize={18}
					fontWeight={400}
					textAlign='justify'
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras sed libero scelerisque, feugiat ex at, hendrerit elit.
					Maecenas quam turpis, posuere a ex quis, hendrerit ultricies
					purus. Phasellus commodo ex nec libero iaculis, sit amet
					hendrerit ex iaculis. Fusce at vehicula purus, a consectetur
					magna. Morbi sit amet finibus ante. Etiam gravida pretium
					suscipit. Maecenas tempor ornare lacus molestie facilisis.
					Maecenas vel justo diam. Phasellus leo ligula, pulvinar nec
					elit id, mollis feugiat diam. Nunc consectetur sem vitae
					orci sollicitudin lobortis. Aliquam ut elit mattis,
					imperdiet orci consequat, gravida tortor. Ut pharetra risus
					pulvinar lectus malesuada imperdiet. Fusce suscipit turpis
					et sem consequat laoreet. Proin lobortis sem iaculis
					eleifend faucibus. Mauris mollis eu tellus eget efficitur.
					Mauris pellentesque hendrerit congue. Integer rhoncus
					vulputate sollicitudin. Maecenas mi est, elementum ut
					iaculis a, sodales ut nisi. Fusce mattis elit risus, nec
					aliquam ex rhoncus vitae. Nulla eget nulla et dolor
					malesuada faucibus eleifend id orci. Aliquam erat volutpat.
					Nunc hendrerit purus sit amet felis hendrerit, a vestibulum
					est mollis. Praesent eget sodales mi. Suspendisse dapibus
					pulvinar hendrerit. Etiam ultricies ante faucibus libero
					consectetur, nec maximus nunc efficitur. Cras eu congue ex.
					Integer varius mollis imperdiet. Nullam vestibulum neque et
					dui commodo vestibulum. Aliquam erat volutpat. Suspendisse
					auctor diam sit amet sollicitudin pulvinar. Nulla cursus
					purus vitae efficitur posuere. Duis tristique mi nec nisi
					rhoncus, a commodo magna dictum. Ut vel sapien nisi. Etiam a
					sem ut ex congue mattis. Curabitur ac lobortis turpis. Morbi
					vel mauris ac arcu euismod tincidunt. Cras lobortis dapibus
					massa, sed molestie risus scelerisque id. Proin semper
					dignissim hendrerit. Vestibulum faucibus nisl non ante
					ullamcorper, at bibendum massa suscipit. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur
					ridiculus mus.
				</Text>
			</Box>
			<Footer />
		</>
	);
};

export default Cancellation;
