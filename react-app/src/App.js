import "./App.css";
import { Grommet } from "grommet";
import { ApolloProvider } from "@apollo/client";
import client from "./Apollo";
import Customers from "./Customer";
import CustomerDetail from "./CustomerDetail";
import { useState } from "react";

function App() {
  const [screen1, setScreen] = useState(true);
  const [customer, setCustomer] = useState(0);
  const switchScreen = (customerId) => {
    setCustomer(() => {
      return customerId;
    });
    setScreen((screen1) => {
      return !screen1;
    });
  };

  return (
    <ApolloProvider client={client}>
      <Grommet>
        <h1 align="center">My first react app</h1>
        {screen1 ? (
          <Customers onClickHandler={switchScreen} />
        ) : (
          <CustomerDetail onClickHandler={switchScreen} customer={customer} />
        )}
      </Grommet>
    </ApolloProvider>
  );
}

export default App;
