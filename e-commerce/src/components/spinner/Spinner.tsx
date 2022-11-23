import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, CircularProgress } from "@mui/material";

const useStyles = makeStyles({
  spinnerContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
  },
});

interface ISpinner {
  size?: number,
  className?: string
}

export function Spinner({ size = 50, className }: ISpinner) {
  const classes = useStyles();
  return (
    <Grid className={className ? className : classes.spinnerContainer}>
      <CircularProgress color="primary" size={size} />
    </Grid>
  );
}
