import { Box, DataTable } from "grommet";
import { useQuery, gql } from "@apollo/client";

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

function Customers(props) {
  const { loading, error, data } = useQuery(GET_CUSTOMER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {console.log(error.message)}</p>;

  return (
    <div>
      <Box
        fill="vertical"
        overflow="auto"
        align="center"
        flex="grow"
        justify="center"
        direction="column"
        pad="xsmall"
      >
        <DataTable
          columns={[
            { header: "Id", property: "id", primary: true },
            { header: "Name", property: "name" },
            { property: "birthDate", header: "BirthDate" },
            { property: "vip", header: "Vip" },
            { property: "spendedMoney", header: "SpendedMoney" },
          ]}
          data={data.customers}
          fill="horizontal"
          onClickRow={({ datum }) => {
            props.onClickHandler(datum.id);
          }}
        />
      </Box>
    </div>
  );
}

export default Customers;
