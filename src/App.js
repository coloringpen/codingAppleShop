import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import bg from './img/bg.png'; // 이렇게 꼭.. 끝까지 써야한다.. 파일명..
import data from './data';

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

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
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
          console.log(data);
        }}
      >
        확인용
      </button>
    </div>
  );
}

export default App;
