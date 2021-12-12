import {
  StyledTable,
  THead,
  TBody,
  TFoot,
  TH,
  TR,
  TD,
  Logo,
  Button,
  TopButton,
} from "./styles/hostoryTable";

export default function Htable({ children, ...restProps }) {
  return <StyledTable {...restProps}>{children}</StyledTable>;
}

Htable.Head = function HtableHead({ children, ...restProps }) {
  return <THead {...restProps}>{children}</THead>;
};
Htable.Body = function HtableBody({ children, ...restProps }) {
  return <TBody {...restProps}>{children}</TBody>;
};
Htable.Foot = function HtableFoot({ children, ...restProps }) {
  return <TFoot {...restProps}>{children}</TFoot>;
};
Htable.TH = function HtableTH({ children, ...restProps }) {
  return <TH {...restProps}>{children}</TH>;
};
Htable.TD = function HtableTD({ children, ...restProps }) {
  return <TD {...restProps}>{children}</TD>;
};
Htable.TR = function HtableTR({ children, ...restProps }) {
  return <TR {...restProps}>{children}</TR>;
};

Htable.Logo = function HtableLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Htable.Button = function HtableButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Htable.TopButton = function HtableTopButton({ children, ...restProps }) {
  return <TopButton {...restProps}>{children}</TopButton>;
};
