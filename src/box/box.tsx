import * as React from 'react';
import type { FC } from 'react';
import { prefix } from '../utils/prefix';
import './box.scss';

const Box: FC = ({ children }) => {
  return <div className={prefix + 'box'}>{children}</div>;
};

export { Box };
