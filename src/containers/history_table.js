import React, { useEffect, useState } from "react";
import { Table } from "../components";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as ROUTES from "../constants/routes";

export default function TableContainer() {
  const [openModal, setOpenModal] = useState(false);
  const [transactionsList, setTransactionsList] = useState([]);
  const [customerId, setCustomersId] = useState();
  console.log(transactionsList);

  useEffect(() => {
    Axios.get(
      "https://banking-system-server.herokuapp.com/get-transaction-history"
    ).then((response) => {
      setTransactionsList(response.data);
    });
  }, []);
  return (
    <React.Fragment>
      <Link to={ROUTES.HOME}>
        <Table.TopButton>Go Back</Table.TopButton>
      </Link>
      <Table>
        <Table.Head>
          <Table.TR>
            <Table.TH>Id</Table.TH>
            <Table.TH>Sender</Table.TH>
            <Table.TH>Receiver</Table.TH>
            <Table.TH>Amount</Table.TH>
            <Table.TH>Date Time</Table.TH>
          </Table.TR>
        </Table.Head>
        <Table.Body>
          {transactionsList.map((transaction) => {
            return (
              <Table.TR key={transaction.id}>
                <Table.TD>{transaction.id}</Table.TD>
                <Table.TD>{transaction.sender}</Table.TD>
                <Table.TD>{transaction.receiver}</Table.TD>
                <Table.TD>{transaction.amount}</Table.TD>
                <Table.TD>
                  {transaction.dateTime.replace("T", " ").replace("Z", " ")}
                </Table.TD>
              </Table.TR>
            );
          })}
        </Table.Body>
      </Table>
    </React.Fragment>
  );
}
