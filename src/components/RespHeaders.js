import {
  Container,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const RespHeaders = ({ headers }) => {
  const [respHeaders, setRespHeaders] = React.useState({});

  React.useEffect(() => {
    if (typeof headers !== "undefined" && typeof headers === "object") {
      setRespHeaders(headers);
    } else {
      setRespHeaders({});
    }
  }, [headers]);

  return (
    <Container px={0}>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Body of the response</TableCaption>
          <Thead>
            <Tr>
              <Th>Keys</Th>
              <Th>Values</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Object.entries(respHeaders).map(([key, value], index) => {
              return (
                <Tr key={index}>
                  <Td>{key}</Td>
                  <Td>{value}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default RespHeaders;
