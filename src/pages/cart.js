import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeItemNum, changeAge } from '../store';

function Cart() {
  let theStates = useSelector((state) => {
    return state;
  }); // Redux store에 있던 state 남음
  let { cartContents } = theStates;
  let dispatch = useDispatch();

  return (
    <>
      <div>{theStates.user.name}'s cart</div>
      <div>kim's age is {theStates.user.age}</div>
      <button
        onClick={() => {
          dispatch(changeAge());
        }}
      >
        age +1
      </button>
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
            {cartContents.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.count}</td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(changeItemNum());
                      }}
                    >
                      +
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Cart;
