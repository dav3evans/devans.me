// import SyntaxHighlighter from 'react-syntax-highlighter';
// import  { a11yDark, dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { a11yDark, dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'


const CodeComponent = (props)  => {
  return (
    <>
      <h1>a11y Dark:</h1>
      <SyntaxHighlighter language={props.value.language} style={a11yDark}>
        {props.value.code}
      </SyntaxHighlighter>

      <h1>Dark:</h1>
      <SyntaxHighlighter language={props.value.language} style={dark}>
          {props.value.code}
      </SyntaxHighlighter>

    </>
  );
}

export default CodeComponent;