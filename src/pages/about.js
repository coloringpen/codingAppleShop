import { Outlet } from 'react-router-dom';

function About() {
  return (
    <div>
      <h4>Company info</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default About;
