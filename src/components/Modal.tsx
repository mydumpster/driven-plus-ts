import styled from "styled-components";
import close from "../assets/close.svg";

export default function Modal({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <ModalContainer>
      <img src={close} alt="" onClick={() => setModal(false)} />
      <Popup>
        <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>
        <div>
          <button onClick={() => setModal(false)}>Não</button>
          <button onClick={() => setModal(false)}>SIM</button>
        </div>
      </Popup>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  img:first-child {
    position: absolute;
    top: 22px;
    right: 22px;
  }
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 248px;
  height: 210px;
  background-color: #fff;
  border-radius: 12px;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000;
    margin-top: 33px;
  }
  div {
    display: flex;
    gap: 14px;
    margin-bottom: 11px;
    button {
      border: none;
      width: 95px;
      height: 52px;
      background: #ff4791;
      border-radius: 8px;
      font-size: 14px;
      line-height: 16px;
      color: #fff;
      &:active {
        background-color: #fb2d7f;
        font-size: 16px;
        font-weight: 700;
      }
    }
    button:first-child {
      background-color: #cecece;
      &:active {
        background-color: #aaa9a9;
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;
