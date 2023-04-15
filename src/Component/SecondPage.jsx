import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import {useState} from 'react'
import axios from "axios";



const SecondPage = () => {
    const { opCost, fixCost, yieldPrice, revenue, selectSucat,setFixCost,opCostb,setOpCostb,fixtCostb,yieldPriceb,revenueb,setAdvansData,advansData,email,agriType,token,setRevenue} = useContext(MapContext)
    const navigate = useNavigate();
    const [formValuesoc, setFormValuesoc] = useState({...opCostb});
    const [formValuesfc, setFormValuesfc] = useState({...fixtCostb});
    const [formValuesyp, setFormValuesyp] = useState({...yieldPriceb});
    const dsmartpage = () => {
        navigate("/");
    }
    const calculate =async()=>{
       const dataa = {
          "op_costs":formValuesoc,
         "fixed_costs":formValuesfc,
         "yield_price":formValuesyp,
         "revenue":revenueb,
         "email":email,
         "selected_subcrop":selectSucat,
         "agri_type":agriType,
        }
        console.log(dataa)
        const {data} =await axios.post("http://82.115.18.58:3000/advance",dataa,{
            headers: {
              'Authorization': `Bearer ${token.token}`
            }
          });
          console.log(revenue)
          console.log("arash",data)
          setRevenue(Object.entries(data.revenue))
         

          }

    
      
    const handleInputChangeO = (event) => {
        const { name, value } = event.target;
        setFormValuesoc(prevState => ({ ...prevState, [name]: Number(value) }));
      
      };
      const handleInputChangeF = (event) => {
        const { name, value } = event.target;
        setFormValuesfc(prevState => ({ ...prevState, [name]: Number(value) }));
      
      };
      const handleInputChangeY = (event) => {
        const { name, value } = event.target;
        setFormValuesyp(prevState => ({ ...prevState, [name]: Number(value) }));
      };
  
      //تب بشود
    return (
        <>
                <Row>
                    <Col sm={12} md={4} lg={4} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded ">
                        <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Operating Costs</h3></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Form>
                            {
                                opCost.map(entry => (

                                    <div key={entry[0]}>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" name={entry[0]}  onChange={handleInputChangeO}>
                                            <Row>
                                                <Col sm={12} md={6}>
                                                    <Form.Label style={{ color: "white" }} name={entry[0]}>{entry[0]}</Form.Label>
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <Form.Control type="number" placeholder={entry[1]} name={entry[0]} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </div>
                                ))
                            }
                        </Form>
                    </Col>
                    <Col sm={12} md={4} lg={4} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">
                        <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Fixed Costs</h3></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Form >
                            {
                                fixCost.map(entry => (

                                    <div key={entry[0]}>
                                        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" name={entry[0]} onChange={handleInputChangeF} >
                                            <Row>
                                                <Col sm={12} md={6}>
                                                    <Form.Label style={{ color: "white" }}  name={entry[0]} >{entry[0]}</Form.Label>
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <Form.Control type="number" placeholder={entry[1]}  name={entry[0]} />
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    </div>
                                ))
                            }

                        </Form>
                    
                        <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
                        <Row className="mt-3 mb-1" ><h5 style={{ color: "white" }}>Expected Production & Price</h5></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row>
                            <Form>
                                {
                                    yieldPrice.map(entry => (

                                        <div key={entry[0]}>
                                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail" name={entry[0]} onChange={handleInputChangeY}>
                                                <Row>
                                                    <Col sm={12} md={6}>
                                                        <Form.Label style={{ color: "white" }} name={entry[0]} >{entry[0]}</Form.Label>
                                                    </Col>
                                                    <Col sm={12} md={6}>
                                                        <Form.Control type="number" placeholder={entry[1]} name={entry[0]} />
                                                    </Col>
                                                </Row>
                                            </Form.Group>

                                        </div>

                                    ))
                                }
                            </Form>
                        </Row>
                        <Button variant="success" type="button" style={{ width: "100%" }} onClick={calculate}>
                            CALCULATE
                        </Button>
                    </Col>
                    <Col sm={12} md={2} lg={2} style={{ backgroundColor: "#21c085", margin: "1%" }} className="rounded">
                        <Row className="mt-3 mb-1 d-flex justify-content-center" ><span style={{ color: "BLACK", fontSize: "20px" }} className=" d-flex justify-content-center mt-2">{selectSucat}</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        <Row className="mt-3 mb-1 d-flex justify-content-center" ><span style={{ color: "BLACK", fontSize: "20px" }} className=" d-flex justify-content-center">Agribusiness Estimations</span></Row>
                        <Row>
                            <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                        </Row>
                        {
                            revenue.map(entry => (
                                <div key={entry[0]}>
                                    <Row className="mt-3 mb-1 " ><span style={{ color: "white", fontSize: "20px" }} className=" d-flex justify-content-center">{entry[0]}</span></Row>
                                    <Row className="mt-3 mb-1 " ><span style={{ color: "white", fontSize: "20px" }} className=" d-flex justify-content-center">{entry[1]}</span></Row>
                                    <Row>
                                        <Col sm={12}>  <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div></Col>
                                    </Row>
                                </div>
                            ))
                        }
                        <Button variant="success" type="button" style={{ width: "100%" }} className="mt-3" onClick={dsmartpage}>
                            BACK
                        </Button>
                    </Col>
                </Row>
           
        </>
    );
};
export default SecondPage;