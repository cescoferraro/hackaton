import * as React from 'react';
import TextField from 'material-ui/TextField';
import * as CSS from "../hey.css"

const RegisterComponent = () => (
  <div className={CSS.register}>
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

     </div>
);

export default RegisterComponent;