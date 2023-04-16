import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//user information
//crop selection
//Agribusiness Estimations

const Smart = () => {
    const { email, setEmail, setLat, lat, lang, setLang, confirm, setConfirm, dthirdpart, setDthirdpart, createEmail, area, setArea,
        mainCat, selectedUnit, setSelectedUnit, setMainCategory, mainCategory, mainCatt, subcatCrops,
        setMainCatt, setPercentage, percentage, dataKinds, setDataKinds, setThirdPart, thirdPart, selectedSubcrop, setselectedSubcrop, getProfit, profit, setProfit, dataExtracFrom, opCost, setRevenue } = useContext(MapContext)
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
            const emails = { "email": email }
            console.log(emails)
            createEmail(emails)
        }
    }
    const dsecondpage = () => {
        navigate("/secondpage");
    }
    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };

    //اندازه دکمه هاو تب
    return (
        <>
            <Row>
                <Col sm={12} md={4} lg={4} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded ">
                <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>user information</h3></Row>

                    <Row className="mt-3 " >
                        <Col className="mt-1 mb-1 " sm={12} >
                            <h6 style={{ color: "white" }}>1. Enter your farm field information</h6>
                        </Col>
                    </Row>
                    <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ color: "white" }}>Email:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
                        </Form.Group>
                        <Col className="mt-1 mb-1 d-flex justify-content-center" sm={12} md={6} >
                            <Button variant="success" type="button" style={{ width: "100%" }} onClick={direct} placeholder={email ? email : "Enter your email"}    >
                                Find location
                            </Button>
                        </Col>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "white" }}>Latitude:</Form.Label>
                            <Form.Control type="number" placeholder="(-90 < x < 90)" value={lat} onChange={(e) => setLat(e.target.value)} disabled={email === ''} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "white" }}>Longitude:</Form.Label>
                            <Form.Control type="number" placeholder="(-180 < x < 180)" value={lang} onChange={(e) => setLang(e.target.value)} disabled={email === ''} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ color: "white" }}>Area of field:</Form.Label>
                            <Row>
                                <Col sm={6}>
                                    <Form.Control type="number" value={area} onChange={(e) => setArea(e.target.value)} disabled={email === ''} />
                                </Col>
                                <Col sm={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Select onChange={handleUnitChange} disabled={email === ''}>
                                            <option>Acre</option>
                                            <option>Hectare</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row className='mb-3'>
                            <Col sm={6}>
                                <Button variant="success" type="button" style={{ width: "100%" }} className="mb-1" onClick={mainCat} disabled={email === '' || lat === '' || lang === '' || area === ''} >
                                    CONFIRM
                                </Button>
                            </Col>
                            <Col sm={6}>
                                <Button variant="success" type="button" style={{ width: "100%" }} onClick={() => { setEmail(''); setLang(''); setLat(''); setArea('') }}>
                                    CLEAR
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                </Col>
                <Col sm={12} md={4} lg={4} style={{ backgroundColor: "#3c557a", margin: "1%" }} className="rounded" >
                <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>crop selection</h3></Row>
                    <Row className="mt-3 mb-1" ><h6 style={{ color: "white" }}>province: {mainCategory.province}</h6></Row>

                    <Row className="border border-white mb-3">
                        <Col sm={12}><h6 style={{ color: "white" }}>2. Select one of the crops which are recommended based on the soil of the field:</h6></Col>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        <Row className='mt-2'>
                            <Col className='mt-2'>
                            <Tabs
                                defaultActiveKey="profile"
                                id="justify-tab-example"
                             
                              
                                justify
                                style={{ backgroundColor: 'gray',color:'' }} 
                            >
                                <Tab eventKey="home" title="best_options"  disabled={mainCategory === ''} style={{color:"#21c085"}}>
                                    <Form.Select aria-label="location" size="lg" onChange={(e) => { setMainCatt(e.currentTarget.value) }} disabled={mainCategory === ''}  value={mainCat} >
                                        

                                        {mainCategory ? mainCategory.best_options.map((list, index) => (
                                            <option value={list} name="list" >{list}</option>
                                        )) : ""}
                                    </Form.Select>

                                </Tab>
                                <Tab eventKey="profile" title="Possible_Options"  style={{color:"#21c085 !important"}} className='arash'>
                                    <Form.Select aria-label="location" size="lg" onChange={(e) => { setMainCatt(e.currentTarget.value) }} disabled={mainCategory === ''}  value={mainCat}>
                                        
                                        {mainCategory ? mainCategory.possible_options.map((list, index) => (
                                            <option value={list} name="list" >{list}</option>
                                        )) : ""}
                                    </Form.Select>
                                </Tab>
                            </Tabs>
                            </Col>
                          
                        </Row>

                        <Col sm={12} md={6} className='mt-2'>
                            <Button variant="success" type="button" style={{ width: "100%" }} className="mb-1" onClick={() => { subcatCrops() }} disabled={mainCategory === ''} >
                                Apply
                            </Button>
                        </Col>


                    </Row>


                    <Row>
                        <Col sm={12}><h6 style={{ color: "white" }}>3. Enter the percentage of field for the considered crop from the following list:</h6></Col>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        <Col sm={6}>
                            <Form.Control type="number" placeholder="%" className="mt-2 mb-2" value={percentage} onChange={e => setPercentage(e.target.value)} disabled={dataKinds === ''} />
                        </Col>
                        <div style={{ height: "1px", width: "100%", backgroundColor: "gray" }}></div>
                        <Col sm={12}><h6 style={{ color: "white" }}>4. Select an item from the different crop Spieces and Techniques of growing:</h6></Col>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        <Col sm={12}>

                            <Form.Select aria-label="location" size="lg" onChange={(e) => { setselectedSubcrop(e.currentTarget.value) }} disabled={dataKinds === ''} value={selectedSubcrop} >
                                <option >-</option>


                                {dataKinds ? dataKinds.kinds.map((list, index) => (
                                    <option value={list} name="list" >{list}</option>
                                )) : ""}
                            </Form.Select>


                        </Col>
                        <Col sm={12}>
                            <Col sm={12} md={6}>
                                <Button variant="success" type="button" style={{ width: "100%" }} className="mb-2 mt-2" onClick={() => { getProfit() }} disabled={dataKinds === ''} >
                                    get profit
                                </Button>
                            </Col>

                        </Col>
                    </Row>

                </Col>
                {

                    <Col sm={12} md={3} lg={3} style={{ backgroundColor: "#21c085", margin: "1%" }} className="rounded">
                       
                        <Row>
                        <Row className="mt-3 mb-1" ><h3 style={{ color: "white" }}>Agribusiness Estimations</h3></Row>
                            
                            <Col sm={12}><h3 className="d-flex justify-content-center" style={{ color: "white", fontSize: "20px" }}>{dataExtracFrom}</h3></Col>
                        </Row>
                        <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>
                        {
                            profit ? profit.map(entry => (
                                <div key={entry[0]}>
                                    <Row> <Col sm={12}><h3 className="d-flex justify-content-center" style={{ color: "black", fontSize: "17px" }} value={entry[0]}>{entry[0]}</h3></Col></Row>
                                    <Row> <Col sm={12}><h3 className="d-flex justify-content-center" style={{ color: "white", fontSize: "20px" }}>{entry[1]}</h3></Col></Row>
                                    <Col sm={12}>  <div style={{ height: "1px", width: "95%", backgroundColor: "gray" }}></div></Col>

                                </div>
                            )) : ""
                        }
                        <Button variant="success" type="button" style={{ width: "100%" }} onClick={dsecondpage} disabled={profit === ''}>
                            customize
                        </Button>
                    </Col>
                }

            </Row>
        </>
    );
};
export default Smart;