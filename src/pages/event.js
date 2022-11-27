import { Outlet } from 'react-router-dom';

function Event() {
  return (
    <>
      <h4>Today's Event</h4>
      <Outlet></Outlet>
    </>
  );
}

export default Event;
