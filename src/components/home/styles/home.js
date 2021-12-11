import styled from "styled-components/macro";

export const Container = styled.div`
  min-height: 560px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 850px;
  margin: auto;
  padding: 60px 68px 40px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media (max-width: 600px) {
    padding: 10px 18px 5px;
    width: 100%;
    height: 300px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  color: black;
  font-size: 48px;
  text-align: center;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 28px;
    /* margin-top: 60px; */
  }
`;

export const Text = styled.h2`
  font-size: 30px;
  margin: 10px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;
export const Span = styled.span`
  color: #9013fe;
`;

export const Pane = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 1000px) {
    margin-bottom: 2rem;
  }
`;
export const Footer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Button = styled.button`
  justify-content: flex-end;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: auto;
  cursor: pointer;
  border-radius: 5rem;
  outline: none;
  display: grid;
  place-items: center;
  transition: 1s ease-in-out;
  color: white;
  cursor: pointer;
  padding: 20px;
  font-size: 30px;
  text-decoration: none;
  font-weight: 900;
  backdrop-filter: blur(6px) saturate(200%);
  -webkit-backdrop-filter: blur(6px) saturate(200%);
  background-color: rgba(144, 19, 254, 0.41);
  border-radius: 12px;
  border: 5px solid rgba(255, 255, 255, 0.125);

  :hover {
    transition: 1s ease-in-out;
    background: #9013fe;
  }

  @media (max-width: 600px) {
    padding: 5px;
    margin: 10px;
    width: 200px;
  }
`;
export const TopButton = styled(Button)`
  position: absolute;
  margin: -50px;
  font-size: 20px;
  z-index: 1;
  padding: 5px;
  background-color: rgba(208, 2, 27, 0.3);
  :hover {
    transition: 0.1s ease-in-out;
    background: rgba(208, 2, 27, 0.6);
  }
  @media (max-width: 600px) {
    width: auto;
    margin: 0px;
  }
`;
