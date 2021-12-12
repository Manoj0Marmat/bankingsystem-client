import styled from "styled-components/macro";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Container = styled.div`
  min-height: 560px;
  width: 100%;
  max-width: 550px;
  margin: auto;
  padding: 20px 28px 20px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(252, 0, 255, 0.3);
  overflow: hidden;
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 10px;
  border: 5px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 600px) {
    padding: 10px 18px 5px;
    height: 560px;
    width: 390px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  font-weight: 900;
  font-size: 25px;
  padding: 10px;
  margin: 5px;
`;
export const Red = styled.h2`
  color: rgb(255 117 117);
`;
export const Green = styled.h3`
  color: rgb(117 255 148);
`;
export const Title = styled.h1`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  color: white;
  font-weight: 900;
  font-size: 25px;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 18px;
  }
`;

export const Body = styled.p`
  flex: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreenButton = styled.button`
  width: 150px;
  height: auto;
  cursor: pointer;
  border-radius: 5rem;
  outline: none;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  transition: 1s ease-in-out;
  color: white;
  cursor: pointer;
  padding: 10px;
  font-size: 30px;
  text-decoration: none;
  font-weight: 900;
  backdrop-filter: blur(6px) saturate(200%);
  -webkit-backdrop-filter: blur(6px) saturate(200%);
  background-color: rgba(48, 155, 72, 0.7);
  border-radius: 12px;
  border: 5px solid rgba(255, 255, 255, 0.125);

  :hover {
    transition: 1s ease-in-out;
    background: rgba(48, 155, 72);
    color: white;
  }

  @media (max-width: 600px) {
    color: white;
    font-weight: 600;
    font-size: 18px;
    width: 100px;
  }
`;
export const RedButton = styled(GreenButton)`
  background-color: rgba(255, 117, 117, 0.7);
  color: white;
  :hover {
    transition: 1s ease-in-out;
    background: rgba(255, 117, 117, 0.7);
    color: white;
  }
`;
export const TopButton = styled(GreenButton)`
  position: absolute;
  font-size: 18px;
  width: auto;
  padding: 3px;
  z-index: 1;
  background-color: rgba(208, 2, 27, 0.3);
  color: white;
  :hover {
    transition: 0.1s ease-in-out;
    background: rgba(208, 2, 27, 0.6);
    color: white;
  }
`;

export const Logo = styled.img`
  vertical-align: middle;
  align-items: center;
  width: 100px;
  height: 100px;

  backdrop-filter: blur(6px) saturate(200%);
  -webkit-backdrop-filter: blur(6px) saturate(200%);
  background-color: rgba(144, 19, 254, 0.41);
  border-radius: 12px;
  border: 5px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
`;
export const Select = styled.select`
  padding: 7px;
  margin: 25px 2px;
  width: auto;
  display: flex;
  justify-content: left;

  border: 5px solid rgba(255, 255, 255, 0.125);
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  color: white;
  font-weight: 900;
  background-color: rgba(144, 19, 254, 0.41);
  font-size: 18px;
  transition: all 150ms ease;
  -webkit-appearance: none;
  @media (min-width: 600px) {
    backdrop-filter: blur(6px) saturate(200%);
    -webkit-backdrop-filter: blur(6px) saturate(200%);
    border-radius: 12px;
    :focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.125);
      box-shadow: 0 1px 3px -2px #9098a9;
    }
  }

  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 15px;
  }
`;

export const Option = styled.option`
  color: #223254;
`;
export const Group = styled.div`
  position: relative;
  margin-bottom: 45px;
`;

export const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
  @media (min-width: 600px) {
    @-webkit-keyframes inputHighlighter {
      from {
        background: rgba(252, 252, 252, 0.9);
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @-moz-keyframes inputHighlighter {
      from {
        background: rgba(252, 252, 252, 0.9);
      }
      to {
        width: 0;
        background: transparent;
      }
    }
    @keyframes inputHighlighter {
      from {
        background: rgba(252, 252, 252, 0.9);
      }
      to {
        width: 0;
        background: transparent;
      }
    }
  }

  @media (max-width: 600px) {
    width: 80px;
  }
`;
export const Bar = styled.span`
  position: relative;
  display: block;
  width: 300px;
  @media (min-width: 600px) {
    :before,
    :after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: rgba(252, 252, 252, 0.9);
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
    :before {
      left: 50%;
    }
    :after {
      right: 50%;
    }
  }
`;
export const Label = styled.label`
  color: rgba(144, 19, 254, 0.4);
  font-weight: 900;
  font-size: 18px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;
export const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: 5px solid rgba(144, 19, 254, 0.4);
  :focus ~ Label,
  :valid ~ Label {
    top: -20px;
    font-size: 14px;
    color: rgba(252, 252, 252, 0.9);
  }
  box-shadow: 0 1px 3px -2px #9098a9;
  @media (min-width: 600px) {
    backdrop-filter: blur(6px) saturate(200%);
    -webkit-backdrop-filter: blur(6px) saturate(200%);
    background-color: rgba(252, 252, 252, 0.41);
    border-radius: 12px;
    border: 5px solid rgba(144, 19, 254, 0.4);
    font-weight: 600;
    font-size: 15px;
    width: 200px;
    :focus {
      outline: none;
    }
    :focus ~ Label,
    :valid ~ Label {
      top: -20px;
      font-size: 14px;
      color: rgba(144, 19, 254, 0.4);
    }
    :focus ~ Highlight {
      -webkit-animation: inputHighlighter 0.3s ease;
      -moz-animation: inputHighlighter 0.3s ease;
      animation: inputHighlighter 0.3s ease;
    }
    :focus ~ Bar:before,
    :focus ~ Bar:after {
      width: 50%;
    }

    :focus ~ Label,
    :valid ~ Label {
      top: -20px;
      font-size: 14px;
      color: rgba(252, 252, 252, 0.9);
    }
  }
`;
export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(25px) saturate(200%);
  -webkit-backdrop-filter: blur(25px) saturate(200%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  animation: loading 3s linear;

  @keyframes loading {
    0% {
      background-color: rgb(144, 22, 3, 0.8);
    }
    25% {
      background-color: rgb(144, 22, 3, 0.4);
    }
    50% {
      background-color: rgb(3, 144, 7, 0.4);
    }
    75% {
      background-color: rgb(3, 144, 7, 0.6);
    }
    100% {
      background-color: rgb(3, 144, 7, 0.9);
    }
  }
`;
export const LdsRoller = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
export const Div = styled.div`
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;

  :after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 8px 20px 0 rgba(252, 0, 255, 0.3);
    backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
  }
  :nth-child(1) {
    animation-delay: -0.036s;
  }
  :nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  :nth-child(2) {
    animation-delay: -0.072s;
  }
  :nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  :nth-child(3) {
    animation-delay: -0.108s;
  }
  :nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  :nth-child(4) {
    animation-delay: -0.144s;
  }
  :nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  :nth-child(5) {
    animation-delay: -0.18s;
  }
  :nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  :nth-child(6) {
    animation-delay: -0.216s;
  }
  :nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  :nth-child(7) {
    animation-delay: -0.252s;
  }
  :nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  :nth-child(8) {
    animation-delay: -0.288s;
  }
  :nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
