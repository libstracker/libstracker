import React from "react";
import Link from "next/link";
import {
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Table,
} from "@chakra-ui/react";
import { Package } from "../types/package";

interface Props {
    packages: Package[];
}
export const PackageList = ({packages}:Props ) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>JavaScript library usage from the top million websites</TableCaption>
        <Thead>
          <Tr>
            <Th>Package Name</Th>
            <Th>Stars</Th>
            <Th isNumeric>Number of websites</Th>
          </Tr>
        </Thead>
        <Tbody>
          {packages.map((pkg) => {
            return (
              <Tr key={pkg.name}>
                <Td>
                  <Link href={`/packages/${pkg.name}`}>{pkg.name}</Link>
                </Td>
                <Td>{pkg.stars}</Td>
                <Td isNumeric>{pkg.domainMatchCount}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
