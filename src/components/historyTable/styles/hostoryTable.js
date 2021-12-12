import styled from "styled-components/macro";

export const StyledTable = styled.div`
  height: 760px;
  width: 100%;
  overflow-y: auto;
  margin: auto;
  border-radius: 20px 0 0 20px;
  padding: 60px 68px 40px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(252, 0, 255, 0.3);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);

  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 1;

  @media (max-width: 600px) {
    padding: 45px 10px 0 10px;
    width: 95%;
    height: 700px;
    border-radius: 0.5rem;
  }
`;

export const THead = styled.thead`
  align-items: center;
  @media (max-width: 600px) {
    margin: none;
  }
`;

export const TFoot = styled.tfoot`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    margin: none;
  }
`;

export const TBody = styled.tbody`
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 600px) {
    margin: none;
  }
`;

export const TR = styled.tr`
  :hover {
    background-color: #ddd;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const TH = styled.th`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  backdrop-filter: blur(6px) saturate(200%);
  -webkit-backdrop-filter: blur(6px) saturate(200%);
  background-color: rgba(144, 19, 254, 0.6);
  border: 5px solid rgba(255, 255, 255, 0.125);
  color: white;
  @media (max-width: 600px) {
    padding: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    :nth-child(1) {
      display: none;
    }
  }
`;

export const TD = styled.td`
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
  @media (max-width: 600px) {
    margin: none;
    padding: 1px;
    :nth-child(1) {
      display: none;
    }

    margin: 0px 0 20px 0;
  }
`;
export const Logo = styled.img`
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(252, 0, 255, 0.3);
  backdrop-filter: blur(17px);
  -webkit-backdrop-filter: blur(17px);
  border-radius: 50%;
  border: 3px solid rgba(144, 19, 254, 0.6);
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
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
  padding: 3px;
  font-size: 18px;
  text-decoration: none;
  font-weight: 900;
  backdrop-filter: blur(6px) saturate(200%);
  -webkit-backdrop-filter: blur(6px) saturate(200%);
  background-color: rgba(144, 19, 254, 0.6);
  border-radius: 12px;
  border: 5px solid rgba(255, 255, 255, 0.125);

  :hover {
    transition: 0.1s ease-in-out;
    background: rgba(144, 19, 254, 0.41);
  }
  @media (max-width: 600px) {
    margin: 10px 0 10px 0;
    font-size: 12px;
  }
`;

export const TopButton = styled(Button)`
  position: absolute;
  margin: 10px;
  z-index: 1;
  background-color: rgba(208, 2, 27, 0.3);
  :hover {
    transition: 0.1s ease-in-out;
    background: rgba(208, 2, 27, 0.6);
  }
`;
