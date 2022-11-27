import { useParams } from 'react-router-dom';
import styled from 'styled-components';

let YellowBtn = styled.button`
  background: ${(props) => props.bgColor};
  color: ${(props) => {
    let textColor = props.bgColor === 'blue' ? 'white' : 'black';
    return textColor;
  }}};
  padding: 10px;
`; // 하나의 스타일이 입혀진 컴포넌트를 생성하는 방법

let NewBtn = styled.button(YellowBtn);

let Box = styled.div`
  background: black;
  padding: 20px;
`;

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
        <YellowBtn bgColor="blue">하잉</YellowBtn>
        <Box>box!</Box>
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
