import { Box, DataTable, Button, Header } from "grommet";
import { useQuery, gql } from "@apollo/client";

const GET_ORDER = gql`
  query MyQuery ($customer : Int){
    orders(where: { customerId: { _eq: $customer } }) {
      id
      date
      numberOfProducts
      customer {
        id
        name
        birthDate
        vip
        spendedMoney
      }
    }
  }
`;

function CustomerDetail(customer) {
  const { loading, error, data } = useQuery(GET_ORDER, {variables: customer});

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(  {console.log(error.message)}</p>;

  return (
    <div>
      <Box align="center" justify="center">
        <Header
          align="center"
          direction="row"
          flex={false}
          justify="between"
          gap="medium"
          margin={{ bottom: "xlarge" }}
        >
          <DataTable
            columns={[
              { header: "Id", property: "id", primary: true },
              { header: "Name", property: "name" },
              { property: "birthDate", header: "BirthDate" },
              { property: "vip", header: "Vip" },
              { property: "spendedMoney", header: "SpendedMoney" },
            ]}
            data={[]}
            fill="horizontal"
            onClickRow={() => {}}
          />
          <Button label="Back" onClick={() => {}} />
        </Header>
        <DataTable
          columns={[
            { header: "Id", property: "id" },
            { header: "Date", property: "date" },
            { property: "numberOfProducts", header: "Items" },
          ]}
          data={data.orders}
        />
      </Box>
    </div>
  );
}

export default CustomerDetail;
