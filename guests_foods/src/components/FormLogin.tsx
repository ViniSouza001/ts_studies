import React, { useState } from "react";
import "./FormLogin.css";

export default function LoginForm() {
  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleUser = (value: string) => {
    setUser(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const login = () => {
    alert(`Usuario: ${user} \nSenha: ${password}`);
  };
  return (
    <form className="login">
      <h1>Login</h1>
      <div className="inputArea">
        <label htmlFor="user">Usuario</label>
        <input
          type="text"
          name="user"
          onChange={(e) => {
            handleUser(e.target.value);
          }}
        />
      </div>
      <div className="inputArea">
        <label htmlFor="password">Senha</label>
        <input
          onChange={(e) => {
            handlePassword(e.target.value);
          }}
          type="password"
          name="password"
        />
      </div>
      <button type="button" onClick={login}>
        Entrar
      </button>
    </form>
  );
}
