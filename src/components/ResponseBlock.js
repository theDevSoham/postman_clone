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
import PrettyBytes from 'react-pretty-bytes';
import RespHeaders from "./RespHeaders";
import RespBody from "./RespBody";

const ResponseBlock = ({ data }) => {
  const [response, setResponse] = React.useState({});
  const [headers, setHeaders] = React.useState({});
  const [body, setBody] = React.useState([]);
  const [size, setSize] = React.useState(0);

  React.useEffect(() => {
    if (typeof data === "object") {
      setResponse(data);
    } 
  }, [data]);

  React.useEffect(() => {

    if (typeof response.headers !== "undefined" && typeof response.headers === "object") {
      setHeaders(response.headers);
    }

    if(typeof response.headers !== "undefined" && typeof response.data !== "undefined") {
      setSize(JSON.stringify(response.data).length + JSON.stringify(response.headers).length);
      setBody(response.data);
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
        px={0}
      >
        <Container display="flex" justifyContent="center" alignItems="center">
          <Text>Status: {typeof response.status !== "undefined" ? response.status : "none"}</Text>
        </Container>
        <Container display="flex" justifyContent="center" alignItems="center">
          <Text>Time: {typeof response.customData?.time === "undefined" ? 0 : response.customData?.time} ms</Text>
        </Container>
        <Container display="flex" justifyContent="center" alignItems="center">
          <Text>Size: </Text>
          <Container>
            <PrettyBytes bytes={size} />
          </Container>
        </Container>
      </Container>
      <Container height="60%" px={0}>
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Body</Tab>
            <Tab>Headers</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <RespBody body={body} />
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
