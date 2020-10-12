import React from "react";
import { Link } from 'react-router-dom';
import {Row, Col} from 'reactstrap'


function Footer() {
    return (
      <div className="footer">
        <Row style={{marginLeft:"25%"}}>
        
          <Col style={{marginTop:"10px", padding:"20px"}}>
            <b>Get in touch!</b>
          </Col>
          <Col style={{ padding:"20px"}}>
          <h7>Location</h7>
          <br/>
          <h7>Bengaluru, Karnataka, India</h7> 
          </Col>
          <Col style={{ padding:"20px"}}>
          <h7>Contact</h7>
          <br/>
          <h7>support@pretva.com</h7>
          </Col>
          <Col style={{ padding:"20px"}}>
            <h7>follow</h7>
            <br/>
            <span class="material-icons" style={{marginTop:"5px"}}>facebook</span>{'   '}
            <img src="https://img.icons8.com/doodle/24/000000/instagram-new.png"/>{'    '}
            <img src="https://img.icons8.com/doodle/24/000000/linkedin--v2.png"/>
          </Col>
          <Col></Col>
        </Row>
        
        

      </div>

    )
}

export default Footer