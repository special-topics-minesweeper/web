import { IMediaQuery } from "./types";
import { MediaQueryTypes } from "./constants";

export const mediaQuery = ({
  breakPoint,
  type = MediaQueryTypes.MAX
}: IMediaQuery ) => `@media screen and (${type}-width: ${breakPoint}px)`;
