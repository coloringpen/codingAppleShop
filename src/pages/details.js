import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail({ shoes }) {
  useEffect(() => {
    console.log('hello!');
  });

  let [count, setCount] = useState(0);

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
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        ></button>
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
