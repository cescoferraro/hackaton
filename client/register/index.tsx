import * as React from 'react';
import TextField from 'material-ui/TextField';
import TableGameComponent from '../tableGames';

const RegisterComponent = () => (
  <div>
    <TextField
    hintText="Nome Completo"
    floatingLabelText="Nome Completo"
    type="text"
    /><br />
    <TextField
    hintText="Email"
    floatingLabelText="Email"
    type="text"
    /><br />
    <TextField
      hintText="Senha"
      floatingLabelText="Senha"
      type="password"
    /><br />

    <TableGameComponent/>
     </div>
);

export default RegisterComponent;