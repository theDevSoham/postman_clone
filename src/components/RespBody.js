import { Container } from "@chakra-ui/react";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { EditorView } from "@codemirror/view";

const RespBody = ({body}) => {

	const [bodyData, setBodyData] = React.useState([]);

	React.useEffect(() => {
		if (typeof body !== "undefined" && typeof body === "object") {
			setBodyData(body);
		} else {
			setBodyData({});
		}
	}, [body]);

  return (
    <Container px={0}>
      <CodeMirror
        value={JSON.stringify(bodyData, null, 2)}
        height="200px"
        extensions={[javascript({ jsx: true }), EditorView.editable.of(false)]}
		readOnly={true}
		basicSetup={true}
      />
    </Container>
  );
};

export default RespBody;
