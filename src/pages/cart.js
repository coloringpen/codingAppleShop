import Table from 'react-bootstrap/Table';

function Cart() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>product</th>
            <th>amount</th>
            <th>change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
