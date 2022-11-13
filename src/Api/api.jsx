import axios from "axios"
let url='https://covid19.mathdro.id/api'
export const countries = async (select) => {
  if(select)
  {
  
    let resp= await axios.get(`${url}/countries/${select}`)
    
      return resp
  }
 
  else{
    let resp= await axios.get(url)
    
    return resp
  }
}

const getdata= async()=>
{

    try{
      let resp= await axios.get(url)
    
      // const {data}=resp
      return resp
    }

  catch(error)
  {
      console.log(error)
  }
  
 


}
export const fetchCountries = async () => {
    try {
      const { data: { countries } } = await axios.get('https://covid19.mathdro.id/api/countries');
  
      return countries.map((country) => country.name);
    } catch (error) {
      return error;
    }
  };
export default getdata;
