import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://frank-goblin-12.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "TLfsKokK3FSCgHKh30r91LzPnus66gX2lwgshOujpw5QpYFAwYHfLTDP4GltsIRr",
  },
  cache: new InMemoryCache(),
});
const GET_CUSTOMER = gql`
  query getCustomer {
    customers {
      id
      name
      birthDate
      vip
      spendedMoney
    }
  }
`;

function Customers() {
  const { loading, error, data } = useQuery(GET_CUSTOMER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.customers.map((customer) => (
    <div key={customer.id}>
      <p>
        {customer.id} | {customer.name} | {customer.birthDate} |{" "}
        {customer.vip ? <>vip</> : <></>} | {customer.spendedMoney}
      </p>
    </div>
  ));
}

function App() {
  return <ApolloProvider client={client}>
    <h1>My first react app</h1>
    <Customers />
  </ApolloProvider>;
}

export default App;
