import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { removeDose, deleteDose } from '../actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return ownProps;
}

class DeleteDose extends React.Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

	render() {
    const { doseId, dispatch } = this.props;
    return (
      <div>
      <Button onClick={this.handleClickOpen}>Delete Dose</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Delete this dose entry?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will delete this dose entry.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Keep
            </Button>
            <Button onClick={() => {
              dispatch(removeDose(doseId));
              dispatch(deleteDose(doseId));
             }} color="primary" autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}


export default connect(
	// mapStateToProps,
	// mapDispatchToProps
)(DeleteDose)
