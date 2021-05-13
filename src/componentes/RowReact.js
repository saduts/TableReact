import React, { Fragment } from 'react';

export const RowReact = ({ id, nome, telefone, email }) => {
  return (
    <Fragment key={id} >
      <tr>
        <td>{nome}</td>
        <td>{telefone}</td>
        <td>{email}</td>
      </tr>
    </Fragment>
  )
}