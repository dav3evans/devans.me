import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { a11yDark, dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'


const CodeComponent = (props)  => {
  return (
    <SyntaxHighlighter language={props.value.language} style={a11yDark}>
      {props.value.code}
    </SyntaxHighlighter>
  );
}

export default CodeComponent;