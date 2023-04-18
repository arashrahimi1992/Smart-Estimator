import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { MapContext } from '../context/MapContext';



const Info = () => {
    const { email, setEmail, setLat, lat, lang, setLang, createEmail, area, setArea, mainCat, setSelectedUnit } = useContext(MapContext)
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
    const handleUnitChange = (event) => {
        setSelectedUnit(event.target.value);
    };
    return (
        <>
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
        </>
    );
};
export default Info;