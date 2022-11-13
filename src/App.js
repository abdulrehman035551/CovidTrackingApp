import getdata from "./Api/api";
import {countries} from  "./Api/api";
import { useEffect, useState } from "react";
import ActionAreaCard from "./components/cards/cards"
import Graph from './components/Chart/Chart'
import BasicSelect from './components/countarypicker/countarypicker'
import Header from './components/Header/Header'
function App() {
 let [fetchdata,setFetchdata]=useState({
  confirmed: { value: "" },
  deaths: { value: "" },
  lastUpdate: "",
 
 })

  async function data()

  {
    let resp=await getdata()
    setFetchdata(resp.data)
    
  
   
  }
  async function  Fetchdata(data)
  {
   
   
   let resp=await countries(data)
   setFetchdata(resp.data)
   
  }

 
  useEffect(() => {
  data()
  Fetchdata()
  }, [])
  return (
    <div>
<Header/>
< ActionAreaCard   fetchdata={fetchdata}></ActionAreaCard>
<BasicSelect Fetchdata={Fetchdata} ></BasicSelect>
<Graph  fetchdata={fetchdata}></Graph>
    </div>
  );
}

export default App;
