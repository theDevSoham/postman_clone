import {
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import RespHeaders from "./RespHeaders";
import RespBody from "./RespBody";

const ResponseBlock = ({ data }) => {
  const [response, setResponse] = React.useState({});
  const [headers, setHeaders] = React.useState({});

  React.useEffect(() => {
    if (typeof data === "object") {
      setResponse(data);
    } else {
      setResponse({});
    }
  }, [data]);

  React.useEffect(() => {

    console.log(response);

    if (typeof response.headers !== "undefined" && typeof response.headers === "object") {
      setHeaders(response.headers);
    }
  }, [response]);

  return (
    <Container
      width="100vw"
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      px={0}
    >
      <Container height="10%">
        <Heading>Response</Heading>
      </Container>
      <Container
        height="30%"
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Text>Status: {typeof response.status !== "undefined" ? response.status : "none"}</Text>
        <Text>Time: {typeof response.customData?.time === "undefined" ? 0 : response.customData?.time} ms</Text>
        <Text>Size: 100B</Text>
      </Container>
      <Container height="60%" px={0}>
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Body</Tab>
            <Tab>Headers</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <RespBody />
            </TabPanel>
            <TabPanel>
              <RespHeaders headers={headers} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Container>
  );
};

export default ResponseBlock;
