import Axios from "axios";

export default function payMoney({ data }) {
  const { sender, receiver, amount } = data;
  const senderAmount = sender.customer[0].balance - amount.payAmount;
  const receiverAmount =
    Number(receiver.receiver[0].balance) + Number(amount.payAmount);

  Axios.post(
    "https://banking-system-server.herokuapp.com/update-receiver-balance",
    {
      id: receiver.receiver[0].id,
      receiverBal: receiverAmount,
    }
  ).then((response) => {
    console.log(response);
  });
  Axios.post(
    "https://banking-system-server.herokuapp.com/update-sender-balance",
    {
      id: sender.customer[0].id,
      senderBal: senderAmount,
    }
  ).then((response) => {
    console.log(response);
  });
  Axios.post(
    "https://banking-system-server.herokuapp.com/insert-transaction-history",
    {
      senderName: sender.customer[0].full_name,
      receiverName: receiver.receiver[0].full_name,
      amount: amount.payAmount,
    }
  ).then((response) => {
    console.log(response);
  });
}
