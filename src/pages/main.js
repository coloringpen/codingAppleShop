import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import bg from '../img/bg.png'; // 이렇게 꼭.. 끝까지 써야한다.. 파일명..

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
    </Col>
  );
}

function Main(props) {
  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: 'url(' + bg + ')' }}
      ></div>
      <Container>
        <Row>
          {props.shoes.map((item, index) => {
            return <ProductCard key={index} shoesItem={item} index={index} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default Main;
