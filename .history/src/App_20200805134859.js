import React from "react";
import "./App.scss";
import {Container} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {
  Message,
  GroupWork,
  Chat,
  Palette,
  Settings,
  PeopleAlt,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor:'black'
  }
}));

function App() {
  return (
    <Container className={classes.container} maxWidth="sm">
      sd
    </Container>
  );
}

export default App;
