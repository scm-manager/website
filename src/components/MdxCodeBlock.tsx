import React, { FC } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";

type Props = {
  className?: string;
  children: string;
};

const MdxCodeBlock: FC<Props> = ({ children, className }) => {
  const language = (className
    ? className.replace(/language-/, "")
    : "text") as Language;
  return (
    <Highlight
      {...defaultProps}
      theme={undefined}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default MdxCodeBlock;
