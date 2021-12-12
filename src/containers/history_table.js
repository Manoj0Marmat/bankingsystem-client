import React, { useEffect, useState } from "react";
import { Htable } from "../components";
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
        <Htable.TopButton>Go Back</Htable.TopButton>
      </Link>
      <Htable>
        <Htable.Head>
          <Htable.TR>
            <Htable.TH>Id</Htable.TH>
            <Htable.TH>Sender</Htable.TH>
            <Htable.TH>Receiver</Htable.TH>
            <Htable.TH>Amount</Htable.TH>
            <Htable.TH>Date Time</Htable.TH>
          </Htable.TR>
        </Htable.Head>
        <Htable.Body>
          {transactionsList.map((transaction) => {
            return (
              <Htable.TR key={transaction.id}>
                <Htable.TD>{transaction.id}</Htable.TD>
                <Htable.TD>{transaction.sender}</Htable.TD>
                <Htable.TD>{transaction.receiver}</Htable.TD>
                <Htable.TD>{transaction.amount}</Htable.TD>
                <Htable.TD>
                  {transaction.dateTime.replace("T", " ").replace("Z", " ")}
                </Htable.TD>
              </Htable.TR>
            );
          })}
        </Htable.Body>
      </Htable>
    </React.Fragment>
  );
}
