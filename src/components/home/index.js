import React from "react";
import {
  Container,
  Title,
  Button,
  Text,
  Span,
  Pane,
  Footer,
  TopButton,
} from "./styles/home";

export default function Home({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Home.Title = function HomeTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Home.Text = function HomeText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Home.Span = function HomeSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
Home.Pane = function HomePane({ ...restProps }) {
  return <Pane {...restProps} />;
};
Home.Footer = function HomeFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

Home.Button = function HomeButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Home.TopButton = function HomeTopButton({ children, ...restProps }) {
  return <TopButton {...restProps}>{children}</TopButton>;
};
