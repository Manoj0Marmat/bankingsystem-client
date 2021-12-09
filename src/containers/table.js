import React, { useEffect, useState } from "react";
import { Table } from "../components";
import ModalContainer from "./modal";
import { Link } from "react-router-dom";
import Axios from "axios";
import * as ROUTES from "../constants/routes";

export default function TableContainer() {
  const [openModal, setOpenModal] = useState(false);
  const [customersList, setCustomersList] = useState([]);
  const [customerId, setCustomersId] = useState();

  function selectPerson(customerId) {
    setOpenModal(true);
    setCustomersId(customerId);
  }

  useEffect(() => {
    Axios.get("https://banking-system-server.herokuapp.com/customers").then(
      (response) => {
        setCustomersList(response.data);
      }
    );
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
            <Table.TH>Profile</Table.TH>
            <Table.TH>Name</Table.TH>
            <Table.TH>Email</Table.TH>
            <Table.TH>Balance</Table.TH>
            <Table.TH>Select</Table.TH>
          </Table.TR>
        </Table.Head>
        <Table.Body>
          {customersList.map((customer) => {
            return (
              <Table.TR key={customer.id}>
                <Table.TD>{customer.id}</Table.TD>
                <Table.TD>
                  <Table.Logo src={customer.profile} />
                </Table.TD>
                <Table.TD>{customer.full_name}</Table.TD>
                <Table.TD>{customer.email}</Table.TD>
                <Table.TD>{customer.balance}</Table.TD>
                <Table.TD>
                  <Table.Button
                    onClick={() => selectPerson(customer.id)}
                    id={customer.id}
                  >
                    Select
                  </Table.Button>
                </Table.TD>
              </Table.TR>
            );
          })}
        </Table.Body>
      </Table>
      {openModal && (
        <ModalContainer
          setOpenModal={setOpenModal}
          customerId={customerId}
          customersList={customersList}
        />
      )}
    </React.Fragment>
  );
}
