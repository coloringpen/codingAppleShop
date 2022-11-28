import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import data from './data';
import Main from './pages/main';
import Detail from './pages/details';
import About from './pages/about';
import Event from './pages/event';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/about');
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Details
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/event');
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">home</Link>
      <Link to="/detail">details</Link> */}

      <Routes>
        <Route path="/" element={<Main shoes={shoes} setShoes={setShoes} />} />
        <Route path="/detail/:num" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>These are the members</div>} />
          <Route path="location" />
          <Route />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>first order cabbage service</p>} />
          <Route path="two" element={<p>birthday coupon</p>} />
        </Route>
        <Route path="*" element={<div>없는 페이지!</div>} />
      </Routes>
    </div>
  );
}

export default App;
