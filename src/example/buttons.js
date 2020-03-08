import React, { useContext } from 'react';
import { ColorContext, UPDATA_COLOR } from './color';

export default function Buttons() {
  const { dispatch } = useContext(ColorContext);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: UPDATA_COLOR,
            color: 'red'
          })
        }
      >
        红色
      </button>
      &nbsp;
      <button
        onClick={() =>
          dispatch({
            type: UPDATA_COLOR,
            color: 'yellow'
          })
        }
      >
        黄色
      </button>
      &nbsp;
      <button
        onClick={() =>
          dispatch({
            type: UPDATA_COLOR,
            color: 'blue'
          })
        }
      >
        蓝色
      </button>
    </div>
  );
}
