import React from "react";
import RequestBlock from "./components/RequestBlock";
import ResponseBlock from './components/ResponseBlock';
import { Container } from "@chakra-ui/react";

function App() {

  const [data, setData] = React.useState({});
  const [requested, setRequested] = React.useState(false);

  const getData = (data, isRequested) => {
    setRequested(isRequested);
    setData(data);
  };

  return (
    <Container width="100vw">
      <Container width="100vw">
        <RequestBlock onRequestComplete={getData} />
      </Container>
      <Container mx={0}>
        {true && <ResponseBlock data={data} />}
      </Container>
    </Container>
  );
}

export default App;
