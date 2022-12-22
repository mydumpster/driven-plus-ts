import styled from "styled-components";
import logo from "../assets/logo.svg";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  function login(event: React.FormEvent) {
    event.preventDefault();
  }

  function handleForm(event: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <LoginContainer>
      <img src={logo} alt="logo" />
      <form onSubmit={login}>
        <input
          name="email"
          onChange={handleForm}
          placeholder="E-mail"
          type="email"
          value={form.email}
        />
        <input
          name="password"
          onChange={handleForm}
          placeholder="Senha"
          type="password"
          value={form.password}
        />
        <button type="submit">ENTRAR</button>
      </form>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 79.73%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;
