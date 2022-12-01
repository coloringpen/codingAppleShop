import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bg from '../img/bg.png'; // 이렇게 꼭.. 끝까지 써야한다.. 파일명..
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function ProductCard({ shoesItem, index }) {
  return (
    <Col>
      <img
        alt="product"
        src={`https://codingapple1.github.io/shop/shoes${index + 1}.jpg`}
        width="80%"
      />
      <h4>{shoesItem.title}</h4>
      <p>{shoesItem.price}</p>
      <Button
        variant="outline-dark"
        style={{
          fontSize: '10px',
          height: '25px',
        }}
      >
        <Link to={`/detail/${shoesItem.id + 1}`}>details</Link>
      </Button>
    </Col>
  );
}

function Main({ shoes, setShoes }) {
  let [serverCount, setServerCount] = useState(2);
  let [pageButton, setPageButton] = useState(true);
  let [loading, setLoading] = useState(false);

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: 'url(' + bg + ')' }}
      ></div>
      <Container>
        <Row>
          {shoes.map((item, index) => {
            return <ProductCard key={index} shoesItem={item} index={index} />;
          })}
        </Row>
      </Container>
      {loading ? <div>on loading...</div> : null}
      {pageButton ? (
        <button
          onClick={() => {
            setServerCount(serverCount + 1);
            setLoading(true);
            axios
              .get(
                `https://codingapple1.github.io/shop/data${serverCount}.json`
              )
              .then((res) => {
                const copyShoes = [...shoes, ...res.data];
                setShoes(copyShoes);
                setLoading(false);
              })
              .catch((res) => {
                console.log(res);
                setPageButton(false);
                setLoading(false);
              });
          }}
        >
          btn
        </button>
      ) : (
        <div>no products anymore!</div>
      )}
    </>
  );
}

export default Main;
