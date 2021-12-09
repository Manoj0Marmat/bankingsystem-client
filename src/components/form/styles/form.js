import styled from "styled-components/macro";

export const Container = styled.div`
  min-height: 560px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
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
  }
`;

export const Typing = styled.h2`
  overflow: hidden;
  font-size: 30px;
  border-right: 0.2em solid black;
  white-space: nowrap;
  text-align: center;
  margin: 0 auto;
  letter-spacing: 0.1em;
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;

  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 12.5em;
    }
  }
  @keyframes blinkTextCursor {
    from {
      border-right-color: rgba(0, 0, 0, 0.75);
    }
    to {
      border-right-color: transparent;
    }
  }

  @media (max-width: 600px) {
    font-size: 20px;
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
export const Black = styled.span`
  color: black;
  font-size: 15px;
`;
export const ProfileLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  color: rgb(13 208 2 / 80%);
`;
export const Profile = styled.img`
  vertical-align: middle;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
export const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 150px;
  height: 150px;
  @media (max-width: 400px) {
    width: 90px;
    height: 90px;
  }
`;

export const Pane = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 1000px) {
    margin-bottom: 2rem;
  }
`;
export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;
  width: 180px;
  height: 60px;
  cursor: pointer;
  border-radius: 5rem;
  outline: none;
  display: grid;
  place-items: center;
  transition: 1s ease-in-out;
  color: white;
  cursor: pointer;
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
`;
