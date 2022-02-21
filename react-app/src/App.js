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

function App() {
  return (
    <div className="App">
      {client
        .query({
          query: gql`
            query MyQuery {
              customers {
                id
                name
                birthDate
                vip
                spendedMoney
              }
            }
          `,
        })
        .then((result) => console.log(result))}
    </div>
  );
}

export default App;
