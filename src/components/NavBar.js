import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  const styles = { display: 'flex', justifyContent: 'space-around' };
  return (
    <Navbar bg="light" expand="lg">
     <Navbar.Brand href="#home">LOVE</Navbar.Brand>
  
      <NavLink exact to='/' activeClassName='active'>Home</NavLink>
      <NavLink to='/about' activeClassName='active'>About</NavLink>
      <NavLink to='/dates'>Workshops in Leipzig</NavLink>
      <NavLink to='/games'>Authentic Relating Games</NavLink>
      <NavLink to='/contact' activeClassName='active'>Kontakt</NavLink>
    </Navbar>
  );
};
export default NavBar