import { Container, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react'

const ResponseBlock = ({data}) => {

  const [response, setResponse] = React.useState({});

  React.useEffect(() => {
    if(typeof data === 'object'){
      setResponse(data);
    }else{
      setResponse({});
    }
  }, [data]);

  return (
	    <Container width="100vw" height="50vh" display="flex" justifyContent="center" alignItems="center" flexDir="column">
        <Container height="10%">
          <Heading>Response</Heading>
        </Container>
        <Container height="30%" display="flex" justifyContent="space-evenly" alignItems="center">
          <Text>Status: 200</Text>
          <Text>Time: 100ms</Text>
          <Text>Size: 100B</Text>
        </Container>
        <Container height="60%">
        <Tabs size='md' variant='enclosed'>
          <TabList>
            <Tab>Body</Tab>
            <Tab>Headers</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Container>
      </Container>
  )
}

export default ResponseBlock