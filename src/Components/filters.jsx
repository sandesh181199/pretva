import React, {useState} from 'react';
import {Col, Row , Dropdown} from 'reactstrap'
import { MDBCol, MDBIcon } from "mdbreact";


function Filter() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    
    return (
    <div>
       <div style={{marginTop:"40px"}} className='container'>
            <Row>
            <Col style={{  marginLeft:"15%"}} ><button style={{color :"rgb(0,77,77)", borderRadius:"20px 0px 0px 20px", borderColor:"rgb(0, 90, 90)", fontSize:"20px", width:"20rem", height:"40px"}}> Search Supplier Product  </button></Col>
            <Col style={{borderColor:"rgb(0,77,77)", borderRadius:"10px", border:"solud 0.3px"}} >
            <button style={{color:"rgb(0, 77, 77)", borderRadius:"0px 20px 20px 0px", borderColor:"rgb(0, 90, 90)", fontSize:"20px", width:"20rem", height:"40px"}}> Search Buyer Product </button>
            </Col>
            <Col></Col>
            </Row>
        </div> 
        

        <div style={{border:"solid 0.3px", borderColor:"rgb(0,77,77)", borderRadius:"10px",marginTop:"40px"}} className='container' >
            <div style={{padding:"16px"}}>
                <div>
                    <b style={{textAlign:"center",color:"rgb(0,77,77)"}}> Search filters </b>
                </div>
                <Row style={{padding:"16px"}}>
                    <Col>
                    <h6 style={{ padding:"10px"}}> Product</h6>
                        <select style={{color:"rgb(0, 77, 77)", border:"0px", outline:"0px" ,  padding:"20px"}}> Product
                            <option value="Product">Product</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Col>
                    <Col>
                    <h6 style={{ padding:"10px"}}> Quality</h6>
                        <select style={{color:"rgb(0, 77, 77)", border:"0px", outline:"0px" ,  padding:"20px"}}>
                            <option value="Product">Quality</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Col>

                    <Col>
                    <h6 style={{ padding:"10px"}}> Cost </h6>
                        <select style={{color:"rgb(0, 77, 77)", border:"0px", outline:"0px",  padding:"20px" }}>
                            <option value="Product">Cost</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Col>

                    <Col >
                    <h6 style={{ padding:"10px"}}> Lead Time</h6>
                        <select style={{color:"rgb(0, 77, 77)", border:"0px", outline:"0px" }}>
                            <option value="Product">Lead Time </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Col>

                    <Col>
                    <h6 style={{ padding:"10px"}}> Rating</h6>
                        <select style={{color:"rgb(0, 77, 77)", border:"0px", outline:"0px" }}>
                            <option value="Product">Rating </option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Col>

                    <Col>
                    <h6 style={{ padding:"10px"}}>Location</h6>
                        <select style={{color:"rgb(0, 77, 77)", border:"0px", outline:"0px" }}>
                            <option value="Product">Location</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </Col>

                    <Col>
                    <h6 style={{ padding:"10px", textAlign:"center", border:"solid 0.8px", color:"rgb(0,77,77)", borderRadius:"20px"}}> Apply Filter </h6>
                        {/* <div style={{textAlign:"center", border:"solid 0.8px", color:"rgb(0,77,77)", borderRadius:"20px"}}>
                            <select style={{color:"rgb(0,77,77)", border:"0px", outline:"0px"}}>
                                <option value="Product">Apply filter </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div> */}
                    </Col>
                </Row>
            </div>
        </div>
   

     <div style={{marginLeft:"14%", marginTop:"10px"}} className='container'>
        <Row>
            {/* <Col> */}
            {/* <div className="input-group">
    <div className="input-group-prepend">
    <span className="input-group-text">With textarea</span>
    </div>
    <textarea className="form-control" aria-label="With textarea"></textarea>
        </div> */}
        <Col>

    <MDBCol md="6" style={{width:"38rem",}}>
      <div className="input-group md-form form-sm form-1 pl-0">
        <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" style={{ borderRadius:"20px"}}/>
      </div>
    </MDBCol>
    </Col>
    <Col>
    <span class="material-icons" style={{marginTop:"10px"}}>search</span>
    </Col>
          <Col>
                    <div style={{marginTop:"5px", height:"30px"}}>
                        <button style={{color:"rgb(0, 77, 77)", borderRadius:"20px", borderColor:"rgb(0, 90, 90)", height:"40px", width:"14rem", marginRight:"10px"}}> Post Product Requirement </button>
                    </div>
                    </Col>  
            {/* </Col> */}
            {/* <hr style={{border:"thin 0.5px rgb(0, 77,77)"}}/>
            <b style={{color:"rgb(0, 77,77)"}}>Search filters</b>
            <hr style={{border:"thin 0.5px rgb(0, 77, 77)"}}/> */}

        </Row> 


        </div>
        
    </div>
      
    );
}

export default Filter;