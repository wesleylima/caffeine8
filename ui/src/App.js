import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import dataService from './service';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import DrinkList from './components/DrinkList';
import DoseList from './components/DoseList';
import NewDose from './components/NewDose';


const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

let store = createStore(reducers, {}, applyMiddleware(dataService))

class InteractiveList extends React.Component {
  render() {
    const { classes } = this.props;
    store.dispatch({ type: 'GET_DRINK_DATA' });
    store.dispatch({ type: 'GET_DOSE_DATA' });
    return (
     <Provider store={store}>
      <div className={classes.root}>
        <Typography variant="h1" className="title">
          Caffeine8
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <DrinkList />
          </Grid>
          <Grid item xs={12} md={6}>
            <DoseList />
            <NewDose />
          </Grid>
        </Grid>
        <Typography className="title">
          By Wesley Lima
        </Typography>
      </div>
      </Provider>
    );
  }
}


InteractiveList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InteractiveList);
