import React from "react";
import {
  Button,
  Container,
  Input,
  SelectField,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import QueryParams from "./QueryParams";
import axios from "axios";

const options = [
  {
    value: "get",
    label: "GET",
  },
  {
    value: "post",
    label: "POST",
  },
  {
    value: "put",
    label: "PUT",
  },
  {
    value: "delete",
    label: "DELETE",
  },
];

const MappedOptions = () => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </>
  );
};

const RequestBlock = ({onRequestComplete}) => {
  const [method, setMethod] = React.useState(options[0].value);
  const [url, setUrl] = React.useState("");
  const [query, setQuery] = React.useState([]);
  const [headers, setHeaders] = React.useState([]);

  const getParams = (params) => {
    setQuery(params);
  };

  const getHeaders = (headers) => {
    setHeaders(headers);
  };

  const sendRequest = () => {
    console.log(method, url, query, headers);

    if(url === "" || query.length === 0 || headers.length === 0) {
      alert("Please fill all the fields");
      return;
    }

    axios({
      url: url,
      method: method,
      params: query,
      headers: headers,
    }).then(response => {
      typeof onRequestComplete === 'function' && onRequestComplete(response, true);
    }).catch(error => {
      console.log(error);
      typeof onRequestComplete === 'function' && onRequestComplete(error, true);
    });
  };

  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      width="100vw"
      height="50vh"
    >
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="20vh"
      >
        <SelectField
          defaultValue={options[0].value}
          height="2.5rem"
          width="5rem"
          borderRadius="0.375rem"
          onChange={(e) => setMethod(e.target.value)}
        >
          <MappedOptions />
        </SelectField>
        <Input placeholder="Enter URL" value={url} onChange={e => setUrl(e.target.value)} />
        <Button background="#0cabeb" onClick={sendRequest}>Send</Button>
      </Container>

      <Container height="30vh" width="100vw" overflow="auto">
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Query Params</Tab>
            <Tab>Headers</Tab>
            <Tab>JSON</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <QueryParams onUpdate={getParams} />
            </TabPanel>
            <TabPanel>
              <QueryParams onUpdate={getHeaders} />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Container>
  );
};

export default RequestBlock;
