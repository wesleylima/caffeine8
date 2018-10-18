import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import dataService from './service';
import { createStore, applyMiddleware } from 'redux';
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
    store.dispatch({ type: 'UPDATE_QUOTA', quota: 500000 });
    store.dispatch({ type: 'GET_DRINK_DATA' });
    store.dispatch({ type: 'GET_DOSE_DATA' });
    return (
     <Provider store={store}>
      <div className={classes.root}>
        <Typography variant="display4" className="title">
          Caffeine8
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} md={6}>
            <DrinkList />
          </Grid>
          <Grid item xs={12} md={6}>
            <DoseList />
            <br />
            <Divider />
            <br />
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
