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
} from "./styles/table";

export default function Table({ children, ...restProps }) {
  return <StyledTable {...restProps}>{children}</StyledTable>;
}

Table.Head = function TableHead({ children, ...restProps }) {
  return <THead {...restProps}>{children}</THead>;
};
Table.Body = function TableBody({ children, ...restProps }) {
  return <TBody {...restProps}>{children}</TBody>;
};
Table.Foot = function TableFoot({ children, ...restProps }) {
  return <TFoot {...restProps}>{children}</TFoot>;
};
Table.TH = function TableTH({ children, ...restProps }) {
  return <TH {...restProps}>{children}</TH>;
};
Table.TD = function TableTD({ children, ...restProps }) {
  return <TD {...restProps}>{children}</TD>;
};
Table.TR = function TableTR({ children, ...restProps }) {
  return <TR {...restProps}>{children}</TR>;
};

Table.Logo = function TableLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Table.Button = function TableButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
Table.TopButton = function TableTopButton({ children, ...restProps }) {
  return <TopButton {...restProps}>{children}</TopButton>;
};
