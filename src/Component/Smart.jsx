import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import { RemoveScroll } from 'react-remove-scroll';

const Smart = () => {
    const { email, setEmail, setLat, lat, lang, setLang,confirm,setConfirm,dthirdpart,setDthirdpart} = useContext(MapContext)
    
    
    const navigate = useNavigate();
    const direct = () => {
        const notify = () => toast.error(' plese enter your email address!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });;
        if (email == "") {

            notify()
        } else {
            navigate("/maps");

        }

    }
    const confirmm =()=>{
        if(lat!=""&&lang!="",email!=""){
            setConfirm(true)
        }
    }
    const dsecondpage =()=>{
        navigate("/secondpage");

    }
   
    return (
        <Container>
            <Row>
                <Col sm={2} md={2} lg={2}>
                    <img
                        src={require("../assets/touba.png")}
                        className="d-block  mt-2 mb-2"

                    />
                </Col>
            </Row>
            <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div>
            <Row>
                <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded ">
                    <Row className="mt-3 " ><span style={{ color: "white" }}>1. Enter your farm field</span><br /><span style={{ color: "white" }}>information:</span></Row>
                    <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: "white" }}>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
                        </Form.Group>
                        <Button variant="success" type="button" style={{ width: "100%" }} onClick={direct} placeholder={email ? email : "Enter your email"}    >
                            Find location
                        </Button>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "white" }}>Latitude:</Form.Label>

                            <Form.Control type="number" placeholder="(-90 < x < 90)" value={lat} onChange={(e) => setLat(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "white" }}>Longitude:</Form.Label>
                            <Form.Control type="number" placeholder="(-180 < x < 180)" value={lang} onChange={(e) => setLang(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "white" }}>Area of field:</Form.Label>
                            <Row>
                                <Col sm={6}>
                                    <Form.Control type="number" />
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3">

                                        <Form.Select >
                                            <option>Acre</option>
                                            <option>Hectare</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                        </Form.Group>
                        <Row className='mb-3'>
                            <Col sm={6}>
                                <Button variant="success" type="button" style={{ width: "100%" }} className="mb-1" onClick={confirmm} >
                                    CONFIRM
                                </Button>
                            </Col>
                            <Col sm={6}>
                                <Button variant="success" type="button" style={{ width: "100%" }}>
                                    CLEAR
                                </Button>
                            </Col>
                        </Row>


                    </Form>
                    {
                        confirm?(<Row className="border border-white mb-3">
                        <Col sm={12}><span style={{ color: "white" }}>2. Select one of the crops which are recommended based on the soil of the field:</span></Col>

                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>

                        <Col sm={12} ><span style={{ color: "white" }}>Possible Options:</span></Col>
                        <Col sm={12}>
                            <Button variant="primary" type="button" style={{ width: "50%" }} className="mb-1"    >
                                rye
                            </Button>
                        </Col>

                        <Col sm={12}>
                            <Button variant="primary" type="button" style={{ width: "50%" }} className="mb-1"  >
                                oats
                            </Button>
                        </Col>

                    </Row> ):("")
                    }
                    
                </Col>
                <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded">

                    <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>province name</h3></Row>
                    {confirm?(
                        <Row>
                        <Col sm={12}><span style={{ color: "white" }}>3. Enter the percentage of field for the considered crop from the following list:</span></Col>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        <Col sm={6}><Form.Control type="number" placeholder="%" className="mt-2 mb-2"/></Col>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
                        <Col sm={12}><span style={{ color: "white" }}>4. Select an item from the different crop Spieces and Techniques of growing:</span></Col>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        <Col sm={12}>
                            <Button variant="primary" type="button" style={{ width: "100%" }} className="mb-1"    >
                                rye
                            </Button>
                        </Col>

                        <Col sm={12}>
                            <Button variant="primary" type="button" style={{ width: "100%" }} className="mb-1" onClick={()=>{setDthirdpart(true)}}  >
                                hybrid fall rye
                            </Button>
                        </Col>
                    </Row>
                    ):("")}
                    
                </Col>
                {
                    dthirdpart?
                    ( <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#21c085", margin: "1%" }} className="rounded">
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>Agribusiness<br/> Estimations in <br/>Saskatchewan</span></Col></Row>
                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "white",fontSize:"20px" }}>Total Operating Costs</span></Col></Row>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>$144.29</span></Col></Row>
                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "white",fontSize:"20px" }}>Total Costs</span></Col></Row>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>$199.3</span></Col></Row>
                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "white",fontSize:"20px" }}>Gross Revenue</span></Col></Row>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>$170.45</span></Col></Row>
                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "white",fontSize:"20px" }}>Net Profit</span></Col></Row>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>$-28.84</span></Col></Row>
                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "white",fontSize:"20px" }}>Market Price ($/bu)</span></Col></Row>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>$5.99</span></Col></Row>
                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "white",fontSize:"20px" }}>Yield (bu)</span></Col></Row>
                    <Row> <Col sm={12}><span className="d-flex justify-content-center" style={{ color: "black",fontSize:"20px" }}>28.46</span></Col></Row>
                   
                    <Button variant="success" type="button" style={{ width: "100%" }} onClick={dsecondpage} placeholder={email ? email : "Enter your email"}    >
                            customize
                         </Button>
                     </Col>):("")
                }
               
            </Row>

        </Container>
    );
};

export default Smart;