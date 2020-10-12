import React,{useState} from 'react';
import { Nav, NavbarBrand, NavItem, NavLink, Col, Row , Button, DropdownMenu, DropdownItem} from 'reactstrap';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
     

      <Nav>
        <Row>

        
        <Col>
        <NavbarBrand>
            <img src="pretvalogo.png"  height="50px" alt="Logo"/>
        </NavbarBrand>
        </Col>
        <Col style={{marginLeft:"20%", marginTop:"10px"}}>
        
          <NavLink className="nav-link"  style={{padding:"20px"}}>About</NavLink>
          <NavLink className="nav-link"  style={{padding:"20px"}}>Services</NavLink>
          <NavLink className="nav-link" style={{padding:"20px"}}>Search</NavLink> 
          <NavLink className="nav-link"  style={{marginRight:"250px"}}>Feedback and support</NavLink>
      
        </Col>
        <Col></Col>
        <Col style={{marginRight:"2%",marginTop:"10px"}}>
        <span class="material-icons" style={{ fontSize:"30px"}}>notifications_none</span>&nbsp; &nbsp; &nbsp;
        <Button color="rgb(0,77,77)" style={{borderRadius:"5px", marginTop:"0px"}} size="5px">Logout</Button>
        

        </Col>
        <div>
        </div>
        </Row>
      </Nav>
      <hr />
    </div>
  );
}

export default NavBar;