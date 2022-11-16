import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Link as ChLink,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import styles from './Header.module.css'
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

interface Props {
  onModelOpen: () => void;
}

export const Header = ({ onModelOpen }: Props) => {
  return (
    <Flex
      shrink={0}
      w="100%"
      h="72px"
      pr="10"
      pb="4"
      pt="4"
      pl="10"
      zIndex="2"
      alignItems="center"
      justifyContent="end"
    >
      <HStack spacing={8}>
        <Box className={styles.navItem}>
          <Link className={styles.navItem} href="/">Packages</Link>
        </Box>
        <Box>
          <Button className={styles.navItem} onClick={onModelOpen} variant="link">
            Get notified
          </Button>
        </Box>
        <Box>
          <Button className={styles.navItem} onClick={onModelOpen} variant="link">
            Request library
          </Button>
        </Box>
        <HStack spacing={4}>
          <ChLink className={styles.navItem} fontSize="xl" href="https://github.com/libstracker">
            <AiFillGithub />
          </ChLink>
          <ChLink className={styles.navItem} target="_blank" fontSize="xl" href="https://twitter.com/kurien_zach">
            <AiFillTwitterCircle />
          </ChLink>
          <ChLink className={styles.navItem} target="_blank" fontSize="xl" href="https://twitter.com/SachinNeravath">
            <AiFillTwitterCircle />
          </ChLink>
        </HStack>
      </HStack>
    </Flex>
  );
};
