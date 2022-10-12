import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box>
      <Nav />
      <Box>
        <Box bg="rgba(14, 135, 246,.25)" pt={"50px"} pb="100px">
          <Text
            fontSize={{ base: 24, lg: 30 }}
            fontWeight={700}
            color="#222"
            textAlign={"center"}
          >
            Contact us
          </Text>
        </Box>
        <Box
          mx={{ base: "20px", lg: "15vw" }}
          px={{ base: "10px", lg: "50px" }}
          py="50px"
          borderRadius={"10px"}
          border="1px solid rgba(255,255,255,.4)"
          lineHeight={2}
          fontSize={{ base: 14, lg: 16 }}
          fontWeight={400}
          textAlign={{ base: "center", lg: "justify" }}
          position={"relative"}
          bottom="50px"
          background="#fffdf7"
          boxShadow={"lg"}
          box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <Text fontWeight={600} fontSize={20}>
            Emails
          </Text>
          <Box pl="10px">
            <Text
              display={"flex"}
              alignItems="center"
              justifyContent={{
                base: "center",
                lg: "flex-start",
              }}
              gap={"5px"}
            >
              <EmailIcon color="rgba(0,0,0,.5)" />
              <Text as="a" href="mailto:info@planmyleisure.com">
                info@planmyleisure.com
              </Text>
            </Text>
            <Text
              display={"flex"}
              alignItems="center"
              justifyContent={{
                base: "center",
                lg: "flex-start",
              }}
              gap={"5px"}
            >
              <EmailIcon color="rgba(0,0,0,.5)" />
              <Text as="a" href="mailto:contracting@planmyleisure.com">
                contracting@planmyleisure.com
              </Text>
            </Text>
          </Box>
          <Text fontWeight={600} fontSize={20} mt="20px">
            Contact number
          </Text>
          <Box
            pl="10px"
            display={"flex"}
            alignItems="center"
            justifyContent={{ base: "center", lg: "flex-start" }}
            gap={"5px"}
          >
            <PhoneIcon color="rgba(0,0,0,.5)" />
            <a href="tel:+917303599368">+917303599368</a>
            <br />
            <a href="tel:+917303599367">+917303599367</a>
            <br />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default ContactUs;
