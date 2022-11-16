import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Switch,
  useToast,
} from "@chakra-ui/react";
import Airtable from "airtable";
import React, { useState, useCallback } from "react";

var base = new Airtable({ apiKey: "keyaUjHRn2iCSdyIu" }).base(
  "appxOtMGtOoGdSMJL"
);

export function RequestAccess() {
const toast = useToast()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enterLibraryInfo, setEnterLibraryInfo] = useState(false);
  const [packageName, setPackageName] = useState("");
  const [uniqueStrings, setUniqueStrings] = useState("");
  const [usedWebsite, setUsedWebsite] = useState("");
  const [windowVariable, setWindowVariable] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);


  const subscribe = useCallback(() => {
    setIsSubmitting(true);
    base("libsTracker").create(
      [
        {
          fields: {
            name,
            email,
            packageName,
            uniqueStrings,
            usedWebsite,
            windowVariable,
          },
        },
      ],
      function (err) {
        setIsSubmitting(false);
        toast({
            title: 'Thank you for subscribing!',
            description: "We'll notify when we launch via email.",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
      }
    );
  }, [name, email, packageName, uniqueStrings, usedWebsite, windowVariable, toast]);

  return (
    <Box pb="6">
          <FormControl mb="5">
            <FormLabel>Name</FormLabel>
            <Input
              onChange={(e) => setName(e.target.value)}
              type="email"
              aria-describedby="Name"
            />
          </FormControl>
          <FormControl mb="5">
            <FormLabel>Email address</FormLabel>
            <Input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <FormHelperText>
              We will never share your email with anyone else.
            </FormHelperText>
          </FormControl>
          <FormControl mb="5" display="flex" alignItems="center">
            <Switch
              mr="3"
              onChange={(e) => setEnterLibraryInfo(e.target.checked)}
              size="sm"
              id="find-usage"
            />
            <FormLabel htmlFor="find-usage" mb="0">
              I want to find a library usage
            </FormLabel>
          </FormControl>
          {enterLibraryInfo ? (
            <Box>
              <Alert mb="5" status="info" variant="left-accent">
                <AlertIcon />
                We automatically figure out library usage. But, if you can
                provide a few details, it will help us improve accuracy and
                optimize resource usage.
              </Alert>
              <FormControl mb="5">
                <FormLabel>Npm package name</FormLabel>
                <Input
                  onChange={(e) => setPackageName(e.target.value)}
                  type="text"
                  placeholder="lightgallery"
                ></Input>
                <FormHelperText>Only the package name</FormHelperText>
              </FormControl>
              <FormControl mb="5">
                <FormLabel>Unique strings</FormLabel>
                <Input
                  onChange={(e) => setUniqueStrings(e.target.value)}
                  type="text"
                  placeholder="lightGallery :- data-src is not provided on slide item"
                ></Input>
                <FormHelperText>
                  Unique string that can be used to identify the library. Enter
                  multiple strings separated by comma
                </FormHelperText>
              </FormControl>
              <FormControl mb="5">
                <FormLabel>Window variable</FormLabel>
                <Input
                  onChange={(e) => setWindowVariable(e.target.value)}
                  type="text"
                ></Input>
                <FormHelperText>
                  Variables that are declared at the global scope. Enter
                  multiple strings separated by comma
                </FormHelperText>
              </FormControl>
              <FormControl mb="5">
                <FormLabel>A website that uses this library</FormLabel>
                <Input
                  onChange={(e) => setUsedWebsite(e.target.value)}
                  type="text"
                  placeholder="https://www.apple.com/"
                ></Input>
                <FormHelperText>
                  Enter the website URL of a website that uses the library
                </FormHelperText>
              </FormControl>
            </Box>
          ) : null}
          <Flex w="100%" justifyContent={"center"}>

            <Button
                disabled={isSubmitting}
                onClick={subscribe}
                size="lg"
                w="100%"
                colorScheme='cyan'
            >
                Get notified on launch!
            </Button>
          </Flex>
        </Box>
  );
}
