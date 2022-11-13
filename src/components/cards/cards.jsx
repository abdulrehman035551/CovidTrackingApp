import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {


  return (
    <Card sx={{ Width:" 100% ", alignItems: "center", display: "flex", justifyContent: "center" }}>
      <CardActionArea >
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Confromed
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.fetchdata.confirmed.value}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea  >
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Deaths
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {props.fetchdata.deaths.value}
          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActionArea >
       <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           LastUpdate
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {  props.fetchdata.lastUpdate}
          
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
