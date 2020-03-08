import React, { useContext } from 'react';
import { ColorContext } from './color';

function showText() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { color } = useContext(ColorContext);
  return <h3 style={{ color: color }}>字体颜色</h3>;
}

export default showText;
