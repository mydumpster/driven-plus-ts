import styled from "styled-components";
import plus from "../assets/plan_white.svg";
import arrow from "../assets/arrow.svg";
import money from "../assets/money.svg";
import list from "../assets/list.svg";

export default function Plan() {
  return (
    <SubscriptionsContainer>
      <img src={arrow} alt="" />
      <img src={plus} alt="" />
      <h1>Driven Plus</h1>
      <div>
        <img src={list} alt="" />
        <h2>Benefícios:</h2>
      </div>
      <ol>
        <li>Brindes exclusivos </li>
        <li>Materiais bônus de web</li>
      </ol>
      <div>
        <img src={money} alt="" />
        <h2>Benefícios:</h2>
      </div>
      <p>R$ 39,99 cobrados mensalmente</p>
      <Form>
        <input type="text" placeholder="Nome impresso no cartão" />
        <input type="text" placeholder="Digitos do cartão" />
        <input type="text" placeholder="Código de segurança" />
        <input type="text" placeholder="Validade" />
        <button>Assinar</button>
      </Form>
    </SubscriptionsContainer>
  );
}

const SubscriptionsContainer = styled.div`
  max-width: 375px;
  width: 79%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 87px;
  > img:first-child {
    position: absolute;
    top: 22px;
    left: 22px;
  }
  h1 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    margin: 16px 0 22px;
  }
  > div:nth-of-type(1) {
    width: 100%;
    display: flex;
    gap: 5px;
  }
  ol {
    width: 100%;
    margin: 10px 0 12px;
    li {
      list-style: decimal;
      list-style-position: inside;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ffffff;
    }
  }
  > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    gap: 5px;
  }
  p {
    margin-top: 4px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;

const Form = styled.form`
  width: 100%;
  margin-top: 34px;
  input {
    height: 52px;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    padding-left: 14px;
    ::placeholder {
      font-size: 14px;
      line-height: 16px;
      color: #7e7e7e;
    }
  }

  > input:nth-of-type(1) {
    width: 100%;
  }
  > input:nth-of-type(2) {
    width: 100%;
    margin: 8px 0;
  }
  > input:nth-of-type(3) {
    width: 49%;
    margin-right: 2%;
    padding-left: 6px !important;
  }
  > input:nth-of-type(4) {
    width: 49%;
    padding-left: 6px !important;
  }

  button {
    width: 100%;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;
    margin-top: 12px;
    border: none;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
  }
`;
