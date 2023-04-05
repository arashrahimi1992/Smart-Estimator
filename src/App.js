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
import { Button, Container } from 'react-bootstrap';
import { useNavigate, Link } from "react-router-dom";
import Spinner from './Component/Spinner';
import { RemoveScroll } from 'react-remove-scroll';
import useHistory from 'react-router-dom'
import { useParams } from 'react-router-dom';
import Smart from './Component/Smart'
import { ToastContainer, toast } from 'react-toastify';
import SecondPage from './Component/SecondPage'



const App = () => {
  const [fetch, setFetch] = useState([{}, {}])
  const [crops, setCrops] = useState("")
  const [lat, setLat] = useState("");
  const [lang, setLang] = useState("");
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  const [confirm, setConfirm] = useState(false)
  const [dthirdpart, setDthirdpart] = useState(false)

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

      // var url = window.location.href;
      // var params = `?long=${lang}&lat=${lat}`;
      // var newUrl = url + params;

      // // Redirect to the new URL
      // window.location.href = newUrl;
      // console.log(url)

      // const data =
      // {
      //   "latitude": lat,
      //   "longitude": lang
      // }
      // const res = await axios.post('https://localhost:7222/api/Langlats', data)
      //       if (res) {

      //  var url = window.location.href;
      //       var params = `?long=${lang}&lat=${lat}`;
      //       var newUrl = url + params;

      //       Redirect to the new URL
      //       window.location.href = "/smart";
      //         redirectToExternalUrl()


      //       }
      navigate("/");


    } catch (error) {
      console.error('Error posting data: ', error);
    }
  }
  // const Link=()=>{
  //   navigate(`/map`);
  // }
  return (
    <>
      <MapContext.Provider value={{
        fetch,
        setFetch,
        crops,
        setCrops,
        setLat,
        setLang,
        lat,
        lang,
        sendData,
        email,
        setEmail,
        confirm,
        setConfirm,
        dthirdpart,
        setDthirdpart
      }} >
        <Routes>
          {loading ?
            <Route path='/maps' element={<Maps />}></Route> : <Route path="/" element={<Maps fetch={fetch} />} />
          }
          <Route path='/' element={<Smart />}></Route>
          <Route path='/secondpage' element={<SecondPage />}></Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </MapContext.Provider>
    </>
  );
};
export default App;
