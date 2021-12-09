import React from "react";
import {
  Container,
  Title,
  Profile,
  Img,
  Button,
  Text,
  Typing,
  Span,
  Pane,
  Black,
  ProfileLink,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.Typing = function FormTyping({ children, ...restProps }) {
  return <Typing {...restProps}>{children}</Typing>;
};
Form.Span = function FormSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
Form.Black = function FormBlack({ children, ...restProps }) {
  return <Black {...restProps}>{children}</Black>;
};
Form.ProfileLink = function FormProfileLink({ children, ...restProps }) {
  return <ProfileLink {...restProps}>{children}</ProfileLink>;
};
Form.Pane = function FormPane({ ...restProps }) {
  return <Pane {...restProps} />;
};

Form.Profile = function FormProfile({ ...restProps }) {
  return <Profile {...restProps} />;
};
Form.Img = function FormImg({ ...restProps }) {
  return <Img {...restProps} />;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
