/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import './Buttons.scss';

function Buttons({
  inputHandler, clearInput, backspace, changePlusMinus, calculateAns,
}) {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('equalbtn').click();
    }
  });

  return (
    <div className="show-btn">
      <button className="btn nmb" onClick={inputHandler}>
        7
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        8
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        9
      </button>
      <button className="btn clr" onClick={clearInput}>
        AC
      </button>
      <button className="btn clr" onClick={backspace}>
        C
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        4
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        5
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        6
      </button>
      <button className="btn exp" onClick={inputHandler}>
        %
      </button>
      <button className="btn exp" onClick={changePlusMinus}>
        -/+
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        1
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        2
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        3
      </button>
      <button className="btn exp" onClick={inputHandler}>
        +
      </button>
      <button className="btn exp" onClick={inputHandler}>
        -
      </button>
      <button className="btn nmb" onClick={inputHandler}>
        0
      </button>
      <button className="btn exp" onClick={inputHandler}>
        .
      </button>
      <button className="btn exp" onClick={inputHandler}>
        !
      </button>
      <button className="btn exp" onClick={inputHandler}>
        ÷
      </button>
      <button className="btn exp" onClick={inputHandler}>
        x
      </button>
      <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
}

export default Buttons;
