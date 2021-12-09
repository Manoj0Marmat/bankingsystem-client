import React, { useState, useEffect } from "react";
import { Modal } from "../components";
import Axios from "axios";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import payMoney from "../backend";

export default function ModalContainer({
  setOpenModal,
  customerId,
  customersList,
}) {
  const [targetCustomerId, setTargetCustomerId] = useState(null);
  const [payAmount, setPayAmount] = useState(0);
  const [receiver, setReceiver] = useState([]);
  const [loading, setLoading] = useState(false);

  function refreshPage({ setLoading }) {
    setLoading(false);
    // window.location.href = "https://manoj-banking-system.netlify.app/home";
  }
  const newCustomerList = customersList.filter(
    (customer) => !(customer.id === customerId)
  );
  const customer = customersList.filter(
    (customer) => customer.id === customerId
  );
  const data = {
    sender: { customer },
    receiver: { receiver },
    amount: { payAmount },
  };
  useEffect(() => {
    Axios.post("https://banking-system-server.herokuapp.com/receiver", {
      id: targetCustomerId,
    }).then((response) => {
      setReceiver(response.data);
    });
  }, [targetCustomerId]);
  return (
    <Modal>
      <Modal.Container>
        <Modal.TopButton
          onClick={() => {
            setOpenModal(false);
          }}
          id="cancelBtn"
        >
          Go Back
        </Modal.TopButton>
        <Modal.Body>
          <Modal.Logo src={customer[0].profile} />
          <Modal.Title>{customer[0].full_name}</Modal.Title>
          <Modal.Text>
            {customer[0].full_name === 0 ? (
              <Modal.Red> {customer[0].balance}</Modal.Red>
            ) : (
              <Modal.Green> {customer[0].balance}</Modal.Green>
            )}
          </Modal.Text>
        </Modal.Body>
        <Modal.Select onChange={(e) => setTargetCustomerId(e.target.value)}>
          <Modal.Option selected disabled>
            Select Customer
          </Modal.Option>
          {newCustomerList.map((customer) => {
            return (
              <Modal.Option key={customer.id} value={customer.id}>
                {customer.full_name}
              </Modal.Option>
            );
          })}
        </Modal.Select>
        <Modal.Group>
          <Modal.Input
            required
            type="number"
            onChange={(e) => setPayAmount(e.target.value)}
          />
          <Modal.Highlight></Modal.Highlight>
          <Modal.Bar></Modal.Bar>
          <Modal.Label>Enter Amount</Modal.Label>
        </Modal.Group>
        {payAmount < 1 ? (
          <Modal.RedButton disabled>Pay</Modal.RedButton>
        ) : payAmount > customer[0].balance ? (
          <Modal.RedButton disabled>Pay</Modal.RedButton>
        ) : targetCustomerId === null ? (
          <Modal.RedButton disabled>Pay</Modal.RedButton>
        ) : (
          <Link to={ROUTES.HOME}>
            <Modal.GreenButton
              onClick={() => {
                setLoading(true);
                payMoney({ data });
                setTimeout(() => {
                  refreshPage({ setLoading });
                }, 3500);
              }}
            >
              Pay
            </Modal.GreenButton>
          </Link>
        )}
        {loading && (
          <Modal.Loading>
            <Modal.LdsRoller>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
              <Modal.Div></Modal.Div>
            </Modal.LdsRoller>
          </Modal.Loading>
        )}
      </Modal.Container>
    </Modal>
  );
}
