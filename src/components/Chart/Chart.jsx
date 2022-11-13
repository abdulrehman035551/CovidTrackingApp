import "./Chart.css"
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
    const Graph = (props)=>{
  let data=  [

        {name: 'Total Cases', getdata:   props.fetchdata.confirmed.value},
        {name: 'Toatal Deaths', getdata: props.fetchdata.deaths.value},
        
      ];
    return<>
    <div id="main">
<BarChart id="barchart" width={500} height={350} data={data}>
<Bar dataKey="getdata" fill="rgb(0, 81, 255)" />
    {/* <CartesianGrid stroke="red" /> */}
    <XAxis w dataKey="name" />
    <YAxis />
  </BarChart>

  </div>
    </>
}
export default Graph;