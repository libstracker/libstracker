import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { NextSeo } from "next-seo";
import styles from "../styles/Home.module.css";
import { useCallback, useState } from "react";
import Airtable from "airtable";
import { PackageList } from "../components/PackageList";
import axios from "axios";
import { Package } from "../types/package";
import { Header } from "../components/Header/Header";
import {
  useDisclosure,
  Modal,
  Text,
  Box,
  Container,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { RequestAccess } from "../components/requestAccess";
import { Team } from "../components/Team/Team";

interface Props {
  packages: Package[];
}

const Home: NextPage<Props> = ({ packages }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NextSeo
        title="LibsTracker - Find who is using your JavaScript library."
        description="libsTracker is a free and open-source tool that helps you find JavaScript library usage from the top million websites."
      />
      <Container maxW="container.xl">
        <Header onModelOpen={onOpen}></Header>
      </Container>
      {/* <Container maxW="container.lg">
        <Flex direction="column" alignItems="center" textAlign="center" py="20">
            <Heading as="h1" size="4xl" mb="10">
            Find who is using your JavaScript library.
            </Heading>
            <Text fontSize="2xl" mb="10">
            libsTracker is a free and open-source tool that helps you find
            JavaScript library usage from the top million websites. Enter your
            email to get notified on launch{" "}
            </Text>
            <Button onClick={onOpen} colorScheme="cyan" size="lg">
            Get notified on launch!
            </Button>
        </Flex>
      </Container> */}
      <div className="col-xxl-7 col-xl-8 col-lg-10 col-md-10 col-sm-11 mx-auto mx-auto">
        <div className="px-4 py-5 mt-5 text-center">
          <h1 className="display-1 fw-bold">
            Find who is using your JavaScript library.
          </h1>
          <div className="col-lg-10 mx-auto mb-5 mt-3">
            <p className="hero-subheading mb-4">
              libsTracker is a free and open-source tool that helps you find
              JavaScript library usage from the top million websites. Enter your
              email to get notified on launch{" "}
            </p>
          </div>
          <Container maxW="container.sm">
            <Button
              onClick={onOpen}
              colorScheme="cyan"
              size="lg"
              mb="10"
              w="100%"
            >
              Get notified on launch!
            </Button>
          </Container>
        </div>
      </div>

      <Container maxW="container.sm">
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <PackageList packages={packages} />
        </Box>
      </Container>
        <Team/>
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
    </>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await axios.get("/package/byStars?limit=100&skip=0");
  const packages = res.data as Package[];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      packages,
    },
  };
}

export default Home;
