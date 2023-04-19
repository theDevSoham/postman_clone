import RequestBlock from "./components/RequestBlock";
import ResponseBlock from './components/ResponseBlock';
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <Container width="100vw">
      <Container width="100vw">
        <RequestBlock />
      </Container>
      <Container>
        <ResponseBlock />
      </Container>
    </Container>
  );
}

export default App;
