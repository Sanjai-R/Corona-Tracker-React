import React from "react";
import styles from "./cards/grids.module.css";
import "./Cards.modules.css";
import { Grid } from "@material-ui/core";
import Grids from "./cards/Grid"
import {Doughnut} from "react-chartjs-2";
export default function Cards({
  data: { confirmed, lastUpdate, deaths, recovered },
}) {
    if(!confirmed){
        return "Loading!.."
    }
    const dogData = {
      
      datasets: [{
        label: 'My First Dataset',
        data: [confirmed.value, deaths.value,recovered.value],
        backgroundColor: [
          '#ffd900f3',
          'rgba(255,0,0,0.7)',
          '#1db954',

        ],
        
      }]
    };
    ;
    const DogChart = (
        <Doughnut
          data= {dogData}
        />
      
    );
  return (
    <div className={"card-container"}>
      <Grid container spacing={3} justify="center" >
        <Grids
          value={ confirmed.value}
          cn={styles.infected}
          lastUpdate = {lastUpdate}
          cardTitle = {"Infected"}
        />
        <Grids
          value={recovered.value}
          cn={styles.recovered}
          lastUpdate = {lastUpdate}
          cardTitle = {"Recovered"}
        />
        <Grids
          value={deaths.value}
          cn={styles.deaths}
          lastUpdate = {lastUpdate}
          cardTitle = {"Deaths"}
        />
      </Grid>
      <div className=  "Dognut-chart">{DogChart}</div>
      
    </div>
  );

  
}
