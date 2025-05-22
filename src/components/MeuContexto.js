import React, { createContext, useState } from 'react';

const MeuContexto = createContext();

const MeuProvedor = ({ children }) => {
  const [n1, setN1] = useState('0');
  const [n2, setN2] = useState('0');
  const [valor, setValor] = useState(0);

  function acrenNumero() {
    const novoValor = valor + 1;
    setValor(novoValor);
    if (novoValor === 10) {
      setN1('0');
      setN2('9-plus');
      setValor(-1);
    } else {
      const valorForm = novoValor.toString().padStart(2, '0');
      setN1(valorForm[0]);
      setN2(valorForm[1]);
    }
  }

  return (
    <MeuContexto.Provider value={{ acrenNumero, n1, n2 }}>
      {children}
    </MeuContexto.Provider>
  );
};

export { MeuProvedor, MeuContexto };
