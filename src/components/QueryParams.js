/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {
  Button,
  Container,
  Input,
  Text,
} from "@chakra-ui/react";

const QueryParams = ({onUpdate}) => {
  const [queryParams, setQueryParams] = React.useState([
    {
      key: "",
      value: "",
    },
  ]);

  const setKey = (e, index) => {
    const { value } = e.target;
    setQueryParams((prevState) => {
      return prevState.map((param, i) => {
        if (i === index) {
          return {
            ...param,
            key: value,
          };
        } else {
          return param;
        }
      });
    });
  };

  const setValue = (e, index) => {
    const { value } = e.target;
    setQueryParams((prevState) => {
      return prevState.map((param, i) => {
        if (i === index) {
          return {
            ...param,
            value: value,
          };
        } else {
          return param;
        }
      });
    });
  };

  const addQuery = () => {
    setQueryParams((prevState) => {
      return [...prevState, { key: "", value: "" }];
    });
  };

  const removeQuery = (index) => {
    setQueryParams((prevState) => {
      return prevState.filter((param, i) => i !== index);
    });
  };

  React.useEffect(() => {
	typeof onUpdate === 'function' && onUpdate(queryParams);
  }, [queryParams]);

  return (
    <Container>
      {queryParams.length > 0 ?
        queryParams.map((param, index) => {
          return (
            <Container
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
              key={index}
            >
              <Input
                placeholder="Key"
                width="33.33%"
                value={param.key}
                onChange={(e) => setKey(e, index)}
              />
              <Input
                placeholder="Value"
                width="33.33%"
                value={param.value}
                onChange={(e) => setValue(e, index)}
              />
              <Button bg="red" width="25%" onClick={() => removeQuery(index)}>
                Remove
              </Button>
            </Container>
          );
        })
		:
		<Text>No queries to display</Text>
	}

      <Container padding={10}>
		<Button bg="green" width="40%" onClick={addQuery}>
			Add
		</Button>
	  </Container>
    </Container>
  );
};

export default QueryParams;
