import React from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { getHydratedDrinks } from '../selectors'

const mapStateToProps = (state) => {
	return {
		drinks: getHydratedDrinks(state),
		loading: state.loading,
		totals: state.totals,
	}
}

const DrinkList = ({ drinks }) => (
  <div>
    <Typography variant="h5" className="title">
      Drink List
    </Typography>
    <div>
      <List>
        {drinks.map( drink =>
          <ListItem key={drink.id} >
						{ drink.drinksBeforeQota }
            <ListItemText
              primary={drink.name}
              secondary={drink.description}
            />
          </ListItem>,
        )}
      </List>
    </div>
  </div>
);

// export default DrinkList;
export default connect(
	mapStateToProps,
	// mapDispatchToProps
)(DrinkList)
