import React from "react";

import Appbar from "@material-ui/core/Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import { makeStyles } from "@material-ui/core/styles";

// Icons
import WbIncandescentIcon from "@material-ui/icons/WbIncandescent";
import Brightness2Icon from "@material-ui/icons/Brightness2";

const useStyles = makeStyles((theme) => ({
  titleStyled: {
    cursor: "pointer",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
}));

function Navbar({ handleChangeMode, theme }) {
  const classes = useStyles();
  return (
    <Appbar position="static">
      <Toolbar>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" className={classes.titleStyled}>
            <a href="/">GitJobs</a>
          </Typography>
          <Tooltip title={theme === "light" ? "Light Mode" : "Dark Mode"}>
            <IconButton onClick={handleChangeMode}>
              {theme == "light" ? <WbIncandescentIcon /> : <Brightness2Icon />}
            </IconButton>
          </Tooltip>
        </Container>
      </Toolbar>
    </Appbar>
  );
}

export default Navbar;
