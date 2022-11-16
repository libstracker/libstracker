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
import { Package, Website } from "../types/package";

interface Props {
  websites: Website[];
}
export const WebsitesList = ({ websites }: Props) => {
  return (
    <TableContainer>
          <Table variant="simple">
            <TableCaption>
              JavaScript library usage from the top million websites
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Website</Th>
                <Th>Rank</Th>
              </Tr>
            </Thead>
            <Tbody>
              {websites.map((website) => {
                return (
                  <Tr key={website.domain}>
                    <Td>
                      <a
                        href={`https://${website.domain}`}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {website.domain}
                      </a>
                    </Td>
                    <Td>{website.rank}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
  );
};
