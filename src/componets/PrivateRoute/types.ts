import { ReactNode, ReactNodeArray } from 'react';

export interface IPrivateRoute {
  children: ReactNode | ReactNodeArray,
  [key: string]: any,
}
