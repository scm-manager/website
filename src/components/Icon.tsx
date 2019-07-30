import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

type Props = {
  icon: string;
  size?: SizeProp;
  className?: string;
  inplace?: boolean
};


export default function(props: Props) {
  const { icon, inplace, ...rest } = props;
  const ic = icon as IconProp;

  const fai = <FontAwesomeIcon icon={ic} fixedWidth={true} {...rest} />;
  if (inplace) {
    return fai;
  }
  return (
    <span className="icon">
      {fai}
    </span>
  );
}
