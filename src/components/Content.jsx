import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TimezonePicker, { timezones } from "react-timezone";
import styles from "./header.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function Content() {
  const [currentZone, setCurrentZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
    //"Pacific/Gambier"
  );
  const getTime = (
    currentZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  ) => {
    //var offsetSecond = new Date().getTimezoneOffset();
    console.log("test" + currentZone);
    return new Date().toLocaleString("en-US", { timeZone: currentZone });
  };
  const [date, setDate] = useState(/*getTime()*/);

  const clearIntervalAction = () => {
    if (!!window.myInterval) {
      clearInterval(window.myInterval);
      console.log("here i try");
    }
  };
  useEffect(() => {
    //clearIntervalAction();
    window.myInterval = setInterval(() => {
      setDate(getTime(currentZone));
    }, 1000);

    console.log("render");
    return () => {
      clearIntervalAction();
    };
  }, [currentZone]);

  const handleChange = (
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  ) => {
    // console.log(timezone);

    // clearInterval(window.myInterval);

    setCurrentZone(timezone);
    //   clearIntervalAction();
    // console.log(timezones);
    // const offsetValue = timezones.find(
    //   (timezoneSelected) => timezoneSelected.name === timezone
    // );
    // console.log(offsetValue.offset);
    // setDate(getTime(timezone));
    //clearInterval(myInterval);
    // window.myInterval = {};
    console.log(timezone);
    // window.myInterval = setInterval(() => {
    //   setDate(getTime(timezone));
    // }, 1000);
  };
  //handleChange();

  //clearIntervalAction();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container item>
      <Grid item xs={12} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography></Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {date}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <TimezonePicker
          value={currentZone}
          className={styles.timePicker}
          onChange={handleChange}
          inputProps={{
            placeholder: "Select Timezone...",
            name: "timezone",
          }}
        />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day2
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Word of the Day3
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
