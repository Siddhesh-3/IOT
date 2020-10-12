import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Iot = () => {
  return (
    <div className="back" style={{ height: 1000, marginLeft: 1 }}>
      <h1 className="title" >IOT Dashboard</h1>
      <Grid
        lg={12}
        md={12}
        xs={12}
        sm={12}
        container
        direction="row"
        style={{ border: 10 }}
      >
        <Grid lg={3} md={12} xs={12} sm={12}>
          <Paper
            elevation={4}
            className="Device1"
            style={{
              borderRadius: 10,
              backgroundColor: "#C2C7CD",
            }}

          
          >
            <h3> <img src="temp.png" style={{height:50,width:50}}/>Temperature </h3>
            <h3>0 °C  </h3>
          </Paper>
        </Grid>
        <Grid lg={3} md={12} xs={12} sm={12}>
          <Paper
            elevation={4}
            className="Device1"
            style={{
              borderRadius: 10,
              backgroundColor: "#76F1CB",
            }}
          >
            <h3><img src="humidity.png" style={{height:50,width:50}}/>Humidity  </h3>
            <h3>0 % </h3>
          </Paper>
        </Grid>
        <Grid lg={3} md={12} xs={12} sm={12}>
          <Paper
            elevation={4}
            className="Device1"
            style={{
              borderRadius: 10,
              backgroundColor: "#C2C7CD",
            }}
          >
            <h3><img src="mostion.png" style={{height:50,width:50}}/>Motion </h3>

            <h3>Yes/No</h3>
          </Paper>
        </Grid>
        <Grid lg={3} md={12} xs={12} sm={12}>
          <Paper
            elevation={4}
            className="Device1"
            style={{
              borderRadius: 10,
              backgroundColor: "#76F1CB",
            }}
          >
            <h3> <img src="distance.png" style={{height:50,width:50}}/>Distance </h3>
            <h3>0 </h3>
          </Paper>
        </Grid>
        <Grid lg={3} md={12} xs={12} sm={12}>
          <Paper
            elevation={4}
            className="Device1"
            style={{
              borderRadius: 10,
              backgroundColor: "#C2C7CD",
            }}
          >
            <h3> <img src="lightbulb.png" style={{height:50,width:50}}/>LDR</h3>
            <h3>0   </h3>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
};

export default Iot;
