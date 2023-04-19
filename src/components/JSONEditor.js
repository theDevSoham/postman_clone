/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from '@chakra-ui/react'
import React from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

const JSONEditor = ({onUpdate}) => {

	const [bodyData, setBodyData] = React.useState();

	const onChange = React.useCallback((value, viewUpdate) => {
		setBodyData(value);
	  }, []);

	React.useEffect(() => {
		typeof onUpdate === 'function' && onUpdate(bodyData);
	}, [bodyData]);

  return (
	<Container px={0}>
      <CodeMirror
        value={bodyData}
        height="200px"
        extensions={[javascript({ jsx: true })]}
		editable={true}
		basicSetup={true}
		onChange={onChange}
      />
    </Container>
  )
}

export default JSONEditor