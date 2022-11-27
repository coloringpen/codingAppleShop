import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Detail({ shoes }) {
  let { num } = useParams();
  let theProduct = shoes.find((shoe) => shoe.id === num - 1);

  // shoes.map((shoe) => {
  //   if (num - 1 === shoe.id) {
  //     setTheProduct(shoe);
  //     console.log(theProduct);
  //   }
  // });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              alt="product"
              src={`https://codingapple1.github.io/shop/shoes${num}.jpg`}
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{theProduct.title}</h4>
            <p>{theProduct.content}</p>
            <p>{theProduct.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>{' '}
    </>
  );
}

export default Detail;
