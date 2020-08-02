import React from "react";
import moment from "moment";

// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  titleStyled: {
    cursor: "pointer",
    transition: "all .25s ease",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

function Job(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <div>
          <Typography
            className={classes.titleStyled}
            variant="h6"
            onClick={handleClickOpen}
            style={{ cursor: "pointer" }}
          >
            {props.data.title}
          </Typography>
          <Typography variant="body1">{props.data.company}</Typography>
        </div>
        <div style={{ textAlign: "right" }}>
          <Typography variant="subtitle2">
            {moment(props.data.created_at).fromNow()}
          </Typography>
          <Typography variant="subtitle1">🌎 {props.data.location}</Typography>
        </div>
      </div>
      <div>
        <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
          <DialogTitle>
            <Typography variant="h4">{props.data.title}</Typography>
            <div>
              <Typography variant="caption" component="span">
                🏢 {props.data.company}
              </Typography>
              <Typography
                variant="caption"
                component="span"
                style={{ margin: "0 10px" }}
              >
                🌎 {props.data.location}
              </Typography>
              <Typography variant="caption" component="span">
                💼 {props.data.type}
              </Typography>
            </div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Typography variant="h5" style={{ marginBottom: "10px" }}>
                Job Description
              </Typography>
              <div
                dangerouslySetInnerHTML={{ __html: props.data.description }}
              />
              <Typography
                variant="h5"
                style={{ marginTop: "20px", marginBottom: "10px" }}
              >
                How To Apply?
              </Typography>
              <div>
                <div
                  dangerouslySetInnerHTML={{ __html: props.data.how_to_apply }}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Job;
