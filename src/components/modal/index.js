import React from "react";
import {
  Background,
  Container,
  Title,
  Body,
  Footer,
  Logo,
  Select,
  Option,
  Text,
  Red,
  Green,
  TopButton,
  Group,
  Input,
  Highlight,
  Bar,
  Label,
  RedButton,
  GreenButton,
  LdsRoller,
  Div,
  Loading,
} from "./styles/modal";

export default function Modal({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Modal.Container = function ModalContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Modal.Title = function ModalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Modal.Body = function ModalBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
Modal.Footer = function ModalFooter({ children, ...restProps }) {
  return <Footer {...restProps}>{children}</Footer>;
};

Modal.RedButton = function ModalButton({ children, ...restProps }) {
  return <RedButton {...restProps}>{children}</RedButton>;
};
Modal.GreenButton = function ModalButton({ children, ...restProps }) {
  return <GreenButton {...restProps}>{children}</GreenButton>;
};
Modal.TopButton = function ModalTopButton({ children, ...restProps }) {
  return <TopButton {...restProps}>{children}</TopButton>;
};
Modal.Logo = function ({ ...restprops }) {
  return <Logo {...restprops} />;
};
Modal.Text = function ModalText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Modal.Green = function ModalGreen({ children, ...restProps }) {
  return <Green {...restProps}>{children}</Green>;
};
Modal.Red = function ModalRed({ children, ...restProps }) {
  return <Red {...restProps}>{children}</Red>;
};
Modal.Select = function ModalSelect({ children, ...restProps }) {
  return <Select {...restProps}>{children}</Select>;
};
Modal.Option = function ModalOption({ children, ...restProps }) {
  return <Option {...restProps}>{children}</Option>;
};
Modal.Input = function ModalInput({ ...restProps }) {
  return <Input {...restProps} />;
};
Modal.Group = function ModalGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Modal.Highlight = function ModalHighlight({ children, ...restProps }) {
  return <Highlight {...restProps}>{children}</Highlight>;
};
Modal.Bar = function ModalBar({ children, ...restProps }) {
  return <Bar {...restProps}>{children}</Bar>;
};
Modal.Label = function ModalLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
Modal.LdsRoller = function ModalLdsRoller({ children, ...restProps }) {
  return <LdsRoller {...restProps}>{children}</LdsRoller>;
};
Modal.Div = function ModalDiv({ children, ...restProps }) {
  return <Div {...restProps}>{children}</Div>;
};
Modal.Loading = function ModalLoading({ children, ...restProps }) {
  return <Loading {...restProps}>{children}</Loading>;
};
