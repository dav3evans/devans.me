import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import  { a11yDark, dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import styles from './code-component.module.scss';
// import fnar from './code-component.scss';

const CodeComponent = (props)  => {
  return (
    <>
    <h1 className={styles.module}>Title!</h1>
    <SyntaxHighlighter language={props.value.language} style={a11yDark}>
      {props.value.code}
    </SyntaxHighlighter></>
  );
}

export default CodeComponent;