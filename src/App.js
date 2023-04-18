import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Maps from './Component/Maps';
import axios from "axios";
import { MapContext } from './context/MapContext'
import { useNavigate, Link } from "react-router-dom";
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
  const [area, setArea] = useState()
  const [mainCategory, setMainCategory] = useState("")
  const [mainCatt, setMainCatt] = useState("")
  const [percentage, setPercentage] = useState("")
  const [confirm, setConfirm] = useState(false)
  const [dthirdpart, setDthirdpart] = useState(false)
  const [selectedUnit, setSelectedUnit] = useState('Acre');
  const [dataKinds, setDataKinds] = useState("")
  const[thirdPart,setThirdPart]=useState('')
  const[profit,setProfit] = useState('')
  const[dataExtracFrom,setDataExtracFrom]=useState('')
  const[selectedSubcrop,setselectedSubcrop]=useState('')
  const[fixCost,setFixCost]=useState('')
  const[fixtCostb,setFixtCostb]=useState('')
  const[yieldPrice,setyieldPrice]=useState('')
  const[yieldPriceb,setyieldPriceb]=useState('')
  const[revenue,setRevenue]=useState('')
  const[revenueb,setRevenueb]=useState('')
  const[opCost,setOpCost]=useState('')
  const[opCostb,setOpCostb]=useState('')    
  const[selectSucat,setSelectSucat]=useState('')
  const[token,setToken]=useState("")
  const[agriType,setAgriType]=useState('')

  const navigate = useNavigate();
 
  const notify = () => toast.error('Please enter all requested items!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  useEffect(() => {
    const getToken = async () => {
      try {
        const formData = new FormData();
        formData.append("username", 'admin');
        formData.append("password", 'Tiva@2022#Ca');
        const { data } = await axios.post(`http://82.115.18.58:8005/token`,formData,{
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        setToken(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    getToken()
  }, [])
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
  
  const sendData = async () => {
    try {
      navigate("/");
    } catch (error) {
      console.error('Error posting data: ', error);
    }
  }
  const createEmail = async (body) => {
    try {
      console.log(token)
      const res = await axios.post("http://82.115.18.58:3000/user_email/", body,{
        headers: {
          'Authorization': `Bearer ${token.token}`
        }
      })
      navigate("/maps");

    } catch (error) {
      alert("error.message")
    }
  }
  const mainCat = async () => {
    try {
      const body = {
        "email": email,
        "latitude": Number(((lat % 180) + 90) % 180 - 90),
        "longitude": Number(((lang % 360) + 540) % 360 - 180),
        "area": Number(area),
        "area_unit": selectedUnit
      }
      console.log(body)
      if (lat != "" && lang != "", email != "", area != "") {
        const { data } = await axios.post("http://82.115.18.58:3000/main_cat_crops", body,{
          headers: {
            'Authorization': `Bearer ${token.token}`
          }
        })
        setMainCategory(data)
        setConfirm(true)
      }
    } catch (error) {
      notify(error.message)
    }
  }
  const subcatCrops = async () => {
    try {
      const body = {
        "main_cat": mainCatt,
      }
        const {data} = await axios.post("https://82.115.18.58:3000/subcat_crops", body,{
          headers: {
            'Authorization': `Bearer ${token.token}`
          }
        })
        setDataKinds(data)
        setThirdPart(true)
       
    } catch (error) {
      notify()
    }

  }
  const getProfit = async () => {
    try {
      const body = {
        "email": email,
        "percentage":percentage,
        "selected_subcrop":selectedSubcrop,
        
      }
      console.log(body)
        const {data} = await axios.post("http://82.115.18.58:3000/get_profit",body,{
          headers: {
            'Authorization': `Bearer ${token.token}`
          }
        })
        setProfit(Object.entries(data.profit))
        setOpCost(Object.entries(data.op_costs))
        setOpCostb(data.op_costs)
        setFixCost(Object.entries(data.fixed_costs))
        setFixtCostb(data.fixed_costs)
        setyieldPrice(Object.entries(data.yield_price))
        setyieldPriceb(data.yield_price)
        setRevenue(Object.entries(data.revenue))
        setRevenueb(data.revenue)
        setSelectSucat(data.selected_subcat_crop)
        setDataExtracFrom(data.data_extracted_from)
        setAgriType(data.agri_type)
        setDthirdpart(true)
    } catch (error) {
      notify()
    }
  }
  return (
    <>
      <MapContext.Provider value={{fetch,setFetch,crops,setCrops,setLat,setLang,lat,lang,sendData,email,setEmail,
        confirm,setConfirm,dthirdpart,setDthirdpart,createEmail,area,setArea,mainCat,selectedUnit,setSelectedUnit,
        mainCategory,setMainCategory,mainCat,mainCatt,setMainCatt,percentage,setPercentage,subcatCrops,setThirdPart,
     thirdPart,dataKinds,setDataKinds,setselectedSubcrop,selectedSubcrop,getProfit,setProfit,profit,dataExtracFrom,
        opCost,fixCost,yieldPrice,revenue,selectSucat,setFixCost,opCostb,setOpCostb,fixtCostb,yieldPriceb,revenueb,
        selectSucat,email,agriType,token,setRevenue}} >
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
        <ToastContainer />
      </MapContext.Provider>
    </>
  );
};
export default App;
