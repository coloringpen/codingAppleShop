import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import { tabContents } from '../data';

function TabModal(props) {
  return <div>{tabContents[props.tab]}</div>;
}

function Detail({ shoes }) {
  let [alert, setAlert] = useState(1);
  let { num } = useParams();
  let theProduct = shoes.find((shoe) => shoe.id === num - 1);
  let [input, setInput] = useState('');
  let [warn, setWarn] = useState(0);
  let [tab, setTab] = useState(0);

  /** tab 내용 바꾸기 */
  function tabChange(num) {
    setTab(num);
  }

  /** 2초 안에 사면 할인창 띄우기 */
  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(0);
      console.log(2);
    }, 2000);
    return () => {
      console.log(1);
      clearTimeout(a); // useEffect 실행하기 전에, 이전에 만들었던 타이머는 지워주세요~!
    };
  }, []);

  /** 수량에 숫자만 넣을 수 있게 처리 */
  useEffect(() => {
    setWarn(isNaN(input) ? true : false);
  }, [input]); // useState로만 했을때보다 반응속도가 빠르다..!

  return (
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
          {warn ? (
            <div className="alert alert-warning">only numbers!</div>
          ) : null}
          <input
            placeholder="how many?"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <h4 className="pt-5">{theProduct.title}</h4>
          <p>{theProduct.content}</p>
          <p>{theProduct.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              tabChange(0);
            }}
          >
            button0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              tabChange(1);
            }}
          >
            button1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              tabChange(2);
            }}
          >
            button2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabModal tab={tab} />
    </div>
  );
}

export default Detail;
