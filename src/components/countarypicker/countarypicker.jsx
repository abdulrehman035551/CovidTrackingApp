import * as React from 'react';
import Box from '@mui/material/Box';

import FormControl from '@mui/material/FormControl';

import { useState,useEffect } from 'react';

import { NativeSelect } from '@mui/material';
import  {fetchCountries }from "/Final Project/covidtracking/src/Api/api"

export default function BasicSelect(props) {
let [countary,setCountary]=useState([])

async function countarydata()
{
  let resp=await fetchCountries()
  setCountary(resp)
}
useEffect(() => {

  countarydata()
 
  }, [])


  return (
    <Box id="box" sx={{Width:" 100% ", alignItems: "center", display: "flex", justifyContent: "center",marginTop:"9px"  }}>
   
   
      <FormControl sx={{ Width:" 100% ",alignItems: "center", display: "flex", justifycontent: "center"  }} >
        <NativeSelect
         value={props.select}
         onChange={async (cv) => {
          props.Fetchdata(cv.target.value)
}}
        >
            <option value="">Global</option>
            {countary.map((val,i) => {
            return<option key={i} value={val}>{val}</option>
          })} 
        </NativeSelect>
      </FormControl>
    </Box>
  );
}