import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Bar } from "react-chartjs-2";

import styles from "./Charts.module.css";

export default function Charts({
  data: { confirmed, recovered, deaths },
  country,
}) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };

    fetchApi();
  }, []);
 
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#ffd900f3", "#1db954", "rgba(255,0,0,0.7)"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return <div className={styles.container}>{barChart}</div>;
}
