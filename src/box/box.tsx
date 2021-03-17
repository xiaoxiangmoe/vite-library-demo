import * as React from 'react';
import type { ReactNode } from 'react';
import { prefix } from '../utils/prefix';
import './box.scss';

const Box = ({ children }: { readonly children?: ReactNode }) => {
  return <div className={prefix + 'box'}>{children}</div>;
};

export { Box };
