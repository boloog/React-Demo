import React from 'react';
import Buttons from './buttons';
import ShowText from './showText';
import { Color } from './color';

function Example6() {
  return (
    <div>
      <Color>
        <Buttons />
        <ShowText />
      </Color>
    </div>
  );
}

export default Example6;
