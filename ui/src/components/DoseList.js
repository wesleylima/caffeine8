import React from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteDose  from './DeleteDose'
import { getHydratedDoses, getCaffeineToday } from '../selectors'

const mapStateToProps = (state) => {
	return {
		doses: getHydratedDoses(state),
		caffeineToday: getCaffeineToday(state),
		quota: state.quota,
	}
}

class DoseList extends React.Component {
	render() {
		const { doses, caffeineToday, quota } = this.props;
		return (
		  <div>
		    <Typography variant="title" className="title">
		      Caffeine Consumed Today
		    </Typography>
		    <div>
		      <List>
		        {doses.map(dose =>
		          <ListItem key={dose.id} >
								<DeleteDose doseId={dose.id} />
		            <ListItemText
									primary={ dose.drink && dose.drink.name }
									secondary={`${dose.percentageConsumed}% at ${dose.createdAt}`}
		            />
								<Typography>{ `${dose.drink.caffeineContent.magnitude * dose.percentageConsumed/100 / 1000} mg` }</Typography>
		          </ListItem>
		        )}
		      </List>
					<Typography>
						Caffeine Consumed Today: { caffeineToday/1000 }mg
					</Typography>
					<Typography>
						Quota: { caffeineToday*100/quota }% (of { quota / 1000}mg)
					</Typography>
		    </div>
		  </div>
		)
	};
}

export default connect(
	mapStateToProps,
	// mapDispatchToProps
)(DoseList)
