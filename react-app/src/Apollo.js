import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://frank-goblin-12.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "TLfsKokK3FSCgHKh30r91LzPnus66gX2lwgshOujpw5QpYFAwYHfLTDP4GltsIRr",
  },
  cache: new InMemoryCache(),
});
export default client;
