import { lazy, Suspense, useEffect } from "react";
import { Box, Icon, Skeleton, Text, useToast } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import Hero from "./heroSection/Hero";
// import Facts from './facts/Facts';
import Packages from "./packages/Packages";
// import DreamVacation from './dreamVacation/DreamVacation';
// import Banner from './banner/Banner';
// import { FaCaretSquareRight } from 'react-icons/fa';
// import ImageSlider from './imageSlider/ImageSlider';
// import IconSection from './iconSection/IconSection';
// import Blog from './blogs/Blog';
// import Footer from './footer/Footer';

// const Hero = lazy(() => {
//   return import("./heroSection/Hero");
// });

const Facts = lazy(() => {
  return import("./facts/Facts");
});

// const Packages = lazy(() => {
//   return import("./packages/Packages");
// });
const DreamVacation = lazy(() => {
  return import("./dreamVacation/DreamVacation");
});
const Banner = lazy(() => {
  return import("./banner/Banner");
});
const ImageSlider = lazy(() => {
  return import("./imageSlider/ImageSlider");
});
const IconSection = lazy(() => {
  return import("./iconSection/IconSection");
});
const Blog = lazy(() => {
  return import("./blogs/Blog");
});
const Footer = lazy(() => {
  return import("./footer/Footer");
});

//  loading for facts
const LoadingForFacts = () => {
  return (
    <Box
      mt={{ base: "30px", lg: "100px" }}
      mb={10}
      px={{ base: "10px", lg: "5vw" }}
      display="flex"
      gap="20px"
    >
      <Skeleton
        h="350px"
        w={{ base: "0%", lg: "45%" }}
        mb={10}
        borderRadius="20px"
      ></Skeleton>
      <Box
        w={{ base: "100%", lg: "35.57%" }}
        h="fit-content"
        flexGrow={1}
        py="10px"
      >
        <Skeleton h="30px" />
        <Skeleton h="10px" mt="20px" />
        <Skeleton h="10px" mt="5px" />
        <Skeleton h="10px" mt="5px" />

        <Box
          mt="40px"
          mx={10}
          display={"grid"}
          gridTemplateColumns="repeat(2,1fr)"
          gap={"20px 10px"}
        >
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Skeleton w="50%" height={{ base: "100px", lg: "50px" }} />
          </Box>
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Skeleton w="50%" height={{ base: "100px", lg: "50px" }} />
          </Box>
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Skeleton w="50%" height={{ base: "100px", lg: "50px" }} />
          </Box>
          <Box display="flex" justifyContent={"center"} alignItems="center">
            <Skeleton w="50%" height={{ base: "100px", lg: "50px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const LoadingDreamVacation = () => {
  return (
    <Box
      w="100vw"
      h="350px"
      bg="rgba(14, 135, 246,.25)"
      px="5vw"
      py="30px"
      mb={10}
    >
      <Skeleton w="500px" h="30px" mx="auto" />
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", lg: "repeat(3,1fr)" }}
        mt="50px"
        gap={{ base: "30px", lg: "0" }}
      >
        <Box
          w="300px"
          mx="auto"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDir="column"
        >
          <Skeleton
            h={{ base: "30px", lg: "80px" }}
            w={{ base: "30px", lg: "80px" }}
            borderRadius="full"
          />
          <Skeleton h="50px" w="100%" mt="20px" />
        </Box>
        <Box
          w="300px"
          mx="auto"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDir="column"
        >
          <Skeleton
            h={{ base: "30px", lg: "80px" }}
            w={{ base: "30px", lg: "80px" }}
            borderRadius="full"
          />
          <Skeleton h="50px" w="100%" mt="20px" />
        </Box>
        <Box
          w="300px"
          mx="auto"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          flexDir="column"
        >
          <Skeleton
            h={{ base: "30px", lg: "80px" }}
            w={{ base: "30px", lg: "80px" }}
            borderRadius="full"
          />
          <Skeleton h="50px" w="100%" mt="20px" />
        </Box>
      </Box>
    </Box>
  );
};

const LoadingPackages = () => {
  return (
    <Box w="100vw" className="packages" px="5vw">
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box>
          <Text
            fontSize={{ base: 25, lg: 40 }}
            fontWeight={700}
            position="relative"
            className="packages-heading"
          >
            Packages
          </Text>
          <Text textAlign={{ base: "start", lg: "start" }} fontSize="20px">
            Discover your ideal Experience
          </Text>
        </Box>
        <Box
          bg="rgba(14, 135, 246,.7)"
          color="#fff"
          px="15px"
          py={"10px"}
          borderRadius="10px"
          display={"flex"}
          alignItems={"center"}
          gap="5px"
          transition={".5s"}
          _hover={{
            background: "rgba(14, 135, 246,.9)",
            svg: { transform: "translate(5px)" },
          }}
          cursor="pointer"
        >
          <Text>See all packages</Text>
          <Icon
            as={BiChevronRight}
            transform="translateX(0)"
            transition={".5s"}
          />
        </Box>
      </Box>
      <Box
        as="div"
        display={"block"}
        whiteSpace="nowrap"
        pb="50px"
        mt="20px"
        overflowX={{ base: "scroll", lg: "scroll" }}
        className="hide-scroll-bar"
      >
        <Skeleton
          display={"inline-block"}
          h="350px"
          w="230px"
          borderRadius={"xl"}
          mx={5}
        />
        <Skeleton
          display={"inline-block"}
          h="350px"
          w="230px"
          borderRadius={"xl"}
          mx={5}
        />
        <Skeleton
          display={"inline-block"}
          h="350px"
          w="230px"
          borderRadius={"xl"}
          mx={5}
        />
        <Skeleton
          display={"inline-block"}
          h="350px"
          w="230px"
          borderRadius={"xl"}
          mx={5}
        />
      </Box>
    </Box>
  );
};

const LoadingBanner = () => {
  return (
    <Box px={{ base: "0", lg: "5vw" }}>
      <Skeleton
        w={{ base: "100vw", lg: "100%" }}
        h={{ base: "350px", lg: "250px" }}
        borderRadius={{ base: "none", lg: "xl" }}
        mb={"50px"}
      ></Skeleton>
    </Box>
  );
};

const LoadingImageSlider = () => {
  return (
    <Box
      w={{ base: "100vw", lg: "100vw" }}
      className="hide-scroll-bar ImageSlider"
      mb={7}
      px="5.7%"
    >
      <Box className="hide-scroll-bar">
        <Text
          fontSize={{ base: 25, lg: 40 }}
          fontWeight={700}
          mb={5}
          textAlign={{ base: "center", lg: "start" }}
          className="ImageSlider-heading"
        >
          Fun and Explore
        </Text>
      </Box>
      <Box
        as="div"
        id="scrollbar"
        display="block"
        whiteSpace="nowrap"
        pb={10}
        color="white"
        className="show-scroll-when-scrolling"
      >
        <Skeleton
          display="inline-block"
          height="450px"
          mx={5}
          w="300px"
          borderRadius={"xl"}
          className="hide-scroll-bar"
        ></Skeleton>
        <Skeleton
          display="inline-block"
          height="450px"
          mx={5}
          w="300px"
          borderRadius={"xl"}
          className="hide-scroll-bar"
        ></Skeleton>
        <Skeleton
          display="inline-block"
          height="450px"
          mx={5}
          w="300px"
          borderRadius={"xl"}
          className="hide-scroll-bar"
        ></Skeleton>
      </Box>
    </Box>
  );
};

const LoadingBlogs = () => {
  return (
    <Box w={{ base: "100vw", lg: "90vw" }} mx="auto" className="Blog">
      <Text
        fontSize={30}
        fontWeight={600}
        mb={5}
        textAlign={{ base: "center", lg: "start" }}
        className="Blog-heading"
      >
        Blogs
      </Text>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          lg: "repeat(5,1fr)",
        }}
        gap={3}
        position="relative"
        pb={5}
        color="white"
        fontWeight={"bold"}
      >
        <Skeleton
          h="200px"
          w="100%"
          gridColumnStart={{ lg: 1 }}
          gridColumnEnd={{ lg: 3 }}
        />
        <Skeleton
          h="200px"
          w="100%"
          gridColumnStart={{ lg: 3 }}
          gridColumnEnd={{ lg: 4 }}
        />
        <Skeleton
          h="200px"
          w="100%"
          gridColumnStart={{ lg: 4 }}
          gridColumnEnd={{ lg: 5 }}
        />
        <Skeleton
          h="200px"
          w="100%"
          gridColumnStart={{ lg: 1 }}
          gridColumnEnd={{ lg: 3 }}
          gridRowStart={{ lg: 2 }}
          gridRowEnd={{ lg: 3 }}
        />
        <Skeleton
          h="200px"
          w="100%"
          gridColumn={{ lg: "3 / 5" }}
          gridRow={{ lg: "2 / 3" }}
        />
        <Skeleton
          minH="200px"
          w="100%"
          gridColumn={{ lg: "5 / 6" }}
          gridRow={{ lg: "1 / 3" }}
        />
      </Box>
    </Box>
  );
};

const Homepage = () => {
  const location = useLocation();
  const toast = useToast();

  useEffect(() => {
    try {
      if (location.state.account) {
        toast({
          title: "Success",
          description:
            "Account is created successfully! Please login to continue.",
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {}
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box overflow="hidden">
      {/* <Suspense fallback={<Skeleton h="500px" />}> */}
      <Hero />
      {/* </Suspense> */}
      <Suspense fallback={<LoadingForFacts />}>
        <Facts />
      </Suspense>

      {/* <Suspense fallback={<LoadingPackages />}> */}
      <Packages />
      {/* </Suspense> */}

      <Suspense fallback={<LoadingDreamVacation />}>
        <DreamVacation />
      </Suspense>

      <Suspense fallback={<LoadingBanner />}>
        <Banner />
      </Suspense>

      <Suspense fallback={<LoadingImageSlider />}>
        <ImageSlider />
      </Suspense>

      <Suspense fallback={<LoadingDreamVacation />}>
        <IconSection />
      </Suspense>

      <Suspense fallback={<LoadingBlogs />}>
        <Blog />
      </Suspense>

      <Suspense fallback={""}>
        <Footer />
      </Suspense>
    </Box>
  );
};

export default Homepage;
