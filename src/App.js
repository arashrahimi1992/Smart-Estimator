import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Maps from './Component/Maps';
import axios from "axios";
import { addressPoints } from "./addressPoints";
import { MapContext } from './context/MapContext'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { redirect } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import { useNavigate,Link  } from "react-router-dom";
import Spinner from './Component/Spinner';
import {RemoveScroll} from 'react-remove-scroll';

const App = () => {
  const [fetch, setFetch] = useState([])
  const [crops, setCrops] = useState("")
  const [lat, setLat] = useState("");
  const [lang, setLang] = useState("");
  const[loading,setLoading]=useState(true)
  const navigate = useNavigate();
  function redirectToExternalUrl() {
    window.location.href = 'http://82.115.18.58:8001/';
  }
  useEffect(() => {
    const getdata = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get(`https://localhost:7222/api/MapDbs/crop/${crops}`)
        setFetch(data.map(p => [p.latitude, p.longitude, p.crop]))
        setLoading(false)
      } catch (error) {
        console.log("error")
      }
    }
    getdata()
  }, [crops])
  //senddata
  const sendData = async () => {
    try {
      console.log("object")
      const data =
      {
        "latitude": lat,
        "longitude": lang
      }
      const res = await axios.post('https://localhost:7222/api/Langlats', data)
      if (res) {
        redirectToExternalUrl()

      }

      console.log('Data posted successfully');
      console.log("object")

    } catch (error) {
      console.error('Error posting data: ', error);

    }










  }
  return (
    <>
    <Container>
    <Row style={{backgroundColor:"#3c557a"}} >
        
        <Col sm={3} className='pt-2 pe-2'>
        <Form.Select aria-label="location" onChange={(e) => setCrops(e.currentTarget.value)} size="lg"  >
            <option >Choose crops</option>
            <option value="alfalfa" name="alfalfa">alfalfa</option>
            <option value="barley" name="barley">barley</option>
            <option value="buckwheat" name="buckwheat">buckwheat</option>
            <option value="canola" name="canola">canola</option>
            <option value="chickpea" name="chickpea">chickpea</option>
            <option value="coloured beans" name="coloured beans">coloured beans</option>
            <option value="corn" name="corn">corn</option>
            <option value="flax" name="flax">flax</option>
            <option value="grain sorghum" name="grain sorghum">grain sorghum</option>
            <option value="hempseed" name="hempseed">hempseed</option>
            <option value="lentils" name="lentils">lentils</option>
            <option value="mustard" name="mustard">mustard</option>
            <option value="navy beans" name="navy beans">navy beans</option>
            <option value="oats" name="oats">oats</option>
            <option value="peas" name="peas">peas</option>
            <option value="rice" name="rice">rice</option>
            <option value="rye" name="rye">rye</option>
            <option value="soybeans" name="soybeans">soybeans</option>
            <option value="sunflowers" name="sunflowers">sunflowers</option>
            <option value="switchgrass" name="switchgrass">switchgrass</option>
            <option value="wheat" name="wheat">wheat</option>
          </Form.Select>
        </Col>
        <Col sm={3} className='pt-2 pe-2'>
          <Form>
            <Form.Group  >
              <Form.Control type="text" placeholder={lat?lat:"latitude"} disabled style={{height:"50px"}} />
            </Form.Group>
          </Form>
        </Col>
        <Col sm={3} className='pt-2 pe-2'>
          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder={lang?lang:"longitude"} disabled style={{height:"50px"}} />
            </Form.Group>
          </Form>
        </Col>
        <Col sm={3} className='pt-2 '>
        <Button variant="secondary" type="submit" onClick={sendData} size="lg" style={{width:"100%",backgroundColor:"#21c085",height:"50px"}} disabled={lat===""} >
          {lat?"submit":<h6 className='mt-1'>
          click on your location on the map

          </h6>}
               
              </Button>
        </Col>
      </Row>
      <MapContext.Provider value={{
        fetch,
        setFetch,
        crops,
        setCrops,
        setLat,
        setLang
      }} >
        <Routes>
          {loading?
          <Route path='/' element={<Spinner/>}></Route>:<Route path="/" element={<Maps fetch={fetch} />} />
          }
        </Routes>
        <RemoveScroll/>
 
      </MapContext.Provider>


    </Container>
     
    </>
  );
};
export default App;
