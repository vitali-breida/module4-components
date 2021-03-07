import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";

export default function AddMovieDialog(props) {
  return (
    <div>
      <Dialog
        open={props.show}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">ADD MOVIE</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Release Date"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Movie URL"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Genre"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Overview"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Runtime"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Reset
          </Button>
          <Button onClick={props.onClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

AddMovieDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
