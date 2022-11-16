import { Input } from "@chakra-ui/input";
import { Flex, HStack, Box, Heading, Text } from "@chakra-ui/layout";
import Link from "next/link";
import {
	Alert,
	AlertIcon,
  Button,
  Container,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import axios from "axios";
import { Package, Website } from "../../types/package";
import { Header } from "../../components/Header/Header";
import { RequestAccess } from "../../components/requestAccess";
import { NextSeo } from "next-seo";
import { WebsitesList } from "../../components/websiteList";
import { Team } from "../../components/Team/Team";

interface Props {
  websites: Website[];
}

const Packages = ({ websites }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
	const { id } = router.query;

  return (
    <>
	 <NextSeo
        title={`LibsTracker - List of websites using ${id} JavaScript library.`}
        description="libsTracker is a free and open-source tool that helps you find JavaScript library usage from the top million websites."
      />
	 <Container maxW="container.xl">
        <Header onModelOpen={onOpen}></Header>
      </Container>
	  <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-10 col-sm-11 mx-auto mx-auto">
        <div className="px-4 py-5 mt-5 text-center">
          <h1 className="display-3 fw-bold">
            List of websites using {id}.
          </h1>
        </div>
      </div>
      <Container maxW="container.sm">
	  	<Alert status='warning' mb={4}>
			<AlertIcon />
			This Project is still WIP and we don&apos;t claim 100% accuracy at this point.
		</Alert>
		<Box borderWidth="1px" borderRadius="lg" p="4">
        	<WebsitesList websites={websites} />
		</Box>
      </Container>
      <Modal
        blockScrollOnMount={false}
        size="2xl"
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent p={6}>
          <ModalHeader>Get Early Access</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <RequestAccess />
          </ModalBody>
        </ModalContent>
      </Modal>
	  <Team/>
    </>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps({ params }: any) {
  const res = await axios.get(`/package/${params.id}/matches?skip=0&limit=100`);
  const websites = res.data as Package[];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      websites,
    },
  };
}

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts

  const res = await axios.get("/package/byStars?limit=1000&skip=0");
  const packages = res.data as Package[];

  const paths = packages.map((pkg) => ({
    params: { id: pkg.name.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default Packages;
