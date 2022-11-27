import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Detail({ shoes }) {
  let [alert, setAlert] = useState(1);
  let { num } = useParams();
  let theProduct = shoes.find((shoe) => shoe.id === num - 1);
  let [count, setCount] = useState(0);

  // shoes.map((shoe) => {
  //   if (num - 1 === shoe.id) {
  //     setTheProduct(shoe);
  //     console.log(theProduct);
  //   }
  // });
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(0);
      console.log(2);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(a); // useEffect 실행하기 전에, 이전에 만들었던 타이머는 지워주세요~!
    };
  });

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        count
      </button>
      <div className="container">
        {alert ? (
          <div className="alert alert-warning">2초 이내 구매시 할인</div>
        ) : null}
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
