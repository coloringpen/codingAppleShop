import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import bg from '../img/bg.png'; // 이렇게 꼭.. 끝까지 써야한다.. 파일명..
import { Link } from 'react-router-dom';
import axios from 'axios';

function ProductCard({ shoesItem, index }) {
  return (
    <Col>
      <img
        alt="product"
        src={process.env.PUBLIC_URL + `./shoes${index + 1}.jpg`}
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
      <button
        onClick={() => {
          axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((res) => {
              const copyShoes = [...shoes];
              const newList = copyShoes.concat(res.data);
              setShoes(newList);
            })
            .catch((res) => {
              console.log(res);
            });
        }}
      >
        btn
      </button>
    </>
  );
}

export default Main;
