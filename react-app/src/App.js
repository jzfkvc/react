import "./App.css";
import { Grommet } from "grommet";
import { ApolloProvider } from "@apollo/client";
import client from "./Apollo";
import Customers from "./Customer";

function App() {
  return (
    <ApolloProvider client={client}>
      <Grommet>
        <h1>My first react app</h1>
        <Customers />
      </Grommet>
    </ApolloProvider>
  );
}

export default App;
