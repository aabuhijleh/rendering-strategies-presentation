import React from "react";

export type AsyncFC<Props = { staticContext: any }> = React.FC<Props> & {
  preloadData?: () => any;
};
