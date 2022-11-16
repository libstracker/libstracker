import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Link as ChLink,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

export const Team = () => {
  return (
    <Flex alignItems="center" justifyContent="center" borderTopWidth={1} py="4" mt="20">
      <Heading as="h4" size="sm" fontWeight="normal" mr="4">
        Built By
      </Heading>
      <HStack spacing={4}>
        <Box
          w="48px"
          h="48px"
          position="relative"
          borderRadius="100%"
          overflow="hidden"
        >
          <a href="https://twitter.com/kurien_zach" rel="noreferrer" target="_blank">
            <Image
              src="/kurian.jpeg"
              alt="Kurien Zacharia"
              layout="fill"
              width={100}
              height={100}
             
            />
          </a>
        </Box>
        <Box
          w="48px"
          h="48px"
          position="relative"
          borderRadius="100%"
          overflow="hidden"
          >
          <a href="https://twitter.com/SachinNeravath" rel="noreferrer" target="_blank">
            <Image
            width={100}
            height={100}
              src="/sachin.jpg"
              alt="Sachin Neravath"
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Box>
      </HStack>
    </Flex>
  );
};
