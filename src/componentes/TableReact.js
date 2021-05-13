import React from 'react';
import { RowReact } from './RowReact';

export const TableReact = (props) => {

  return (
    <>
      <table>
        <thead>
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
        </thead>
        <tbody>
          {
            props.lista.map(({ id, nome, telefone, email }, index) => <RowReact nome={nome} telefone={telefone} email={email} key={id} />)
          }
        </tbody>
      </table>
    </>
  )
}