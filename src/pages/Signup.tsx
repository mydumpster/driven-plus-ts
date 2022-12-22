import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    cpf: "",
    email: "",
    password: "",
  });

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
    <SignupContainer>
      <form onSubmit={login}>
        <input
          name="name"
          onChange={handleForm}
          placeholder="Nome"
          type="text"
          value={form.name}
        />
        <input
          name="cpf"
          onChange={handleForm}
          placeholder="CPF"
          type="text"
          value={form.cpf}
        />
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
        <button type="submit">CADASTRAR</button>
      </form>
      <Link to={"/"}>
        <p>Já possuí uma conta? Entre</p>
      </Link>
    </SignupContainer>
  );
}

const SignupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 80%;
    input {
      width: 100%;
      height: 52px;
      background: #ffffff;
      border-radius: 8px;
      padding-left: 14px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #000;
      border: none;
      ::placeholder {
        color: #7e7e7e;
      }
      :focus {
        outline: 2px solid #ff47917f;
      }
    }
    button {
      height: 52px;
      margin-top: 8px;
      margin-bottom: 24px;
      background-color: #ff4791;
      border-radius: 8px;
      border: none;
      color: #fff;
      font-family: "Roboto";
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      height: 52px;
      line-height: 16px;
    }

    button:active {
      background-color: #fb2d7f;
      font-size: 16px;
      font-weight: 700;
    }
  }

  a {
      color: #fff;
      text-decoration-line: underline;
    }

    @media (min-width: 500px) {
      width: 50%;
    }
`;
