import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import Countup from 'react-countup'
import styles from "./grids.module.css";
export default function Grids({ cardTitle,value, cn,lastUpdate }) {
    
    return (
      <Grid
      
        item
        component={Card}
        xs={12}
        md={3}
        className =  {`${styles.card} ${cn}`}
      >
        <CardContent>
          <Typography variant="inherit" color="textPrimary" gutterBottom >
            {cardTitle}
          </Typography><br/>
          <Typography variant="inherit"  gutterBottom>
            <Countup start={0} end={value} duration={2.3} separator="," />
          </Typography>
        </CardContent>
      </Grid>
    );
  }
  