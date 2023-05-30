/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */

import React, { useState } from 'react';
import { evaluate, round } from 'mathjs';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';
import './Calculadora.scss';

function Calculadora() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');

  // Input
  const inputHandler = (event) => {
    if (answer === 'Input Invalido') return;
    const val = event.target.innerText;

    const str = input + val;
    if (str.length > 9) return;

    if (answer !== '') {
      setInput(answer + val);
      setAnswer('');
    } else setInput(str);
  };

  // Funcion para limpiar el input y el answer.
  const clearInput = () => {
    setInput('');
    setAnswer('');
  };

  // Funcion para calcular el resultado de la operación.
  const calculateAns = () => {
    if (input === '') return;
    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll('x', '*');
    finalexpression = finalexpression.replaceAll('÷', '/');

    try {
      result = evaluate(finalexpression);
    } catch (error) {
      setAnswer('Input Invalido');
      return;
    }

    if (Number.isNaN(result) || result > 999999999) {
      setAnswer('ERROR');
    } else {
      setAnswer(round(result, 7));
    }
  };

  // Funcion para remover cualquier número después del noveno.
  const backspace = () => {
    if (answer !== '') {
      setInput(answer.toString().slice(0, -1));
      setAnswer('');
    } else setInput((prev) => prev.slice(0, -1));
  };

  // Función "+/-"  que convierte el número desplegado en un número negativo.
  const changePlusMinus = () => {
    if (answer === 'Input Invalido') return;
    if (answer !== '') {
      const ans = answer.toString();
      if (ans.charAt(0) === '-') {
        const plus = '+';
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === '+') {
        const minus = '-';
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        const minus = '-';
        setInput(minus.concat(ans));
      }
      setAnswer('');
    } else if (input.charAt(0) === '-') {
      const plus = '+';
      setInput((prev) => plus.concat(prev.slice(1, prev.length)));
    } else if (input.charAt(0) === '+') {
      const minus = '-';
      setInput((prev) => minus.concat(prev.slice(1, prev.length)));
    } else {
      const minus = '-';
      setInput((prev) => minus.concat(prev));
    }
  };

  return (
    <div className="container">
      <div className="main">
        <Display input={input} setInput={setInput} answer={answer} />
        <Buttons
          inputHandler={inputHandler}
          clearInput={clearInput}
          backspace={backspace}
          changePlusMinus={changePlusMinus}
          calculateAns={calculateAns}
        />
      </div>
    </div>
  );
}

export default Calculadora;
