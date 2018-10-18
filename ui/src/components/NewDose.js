import React from 'react';
import { connect } from 'react-redux';
import { saveDose } from '../actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


const mapStateToProps = (state) => {
	return {
		drinks: state.drinks,
	}
}

class NewDose extends React.Component {
  state = {
    drink: 0,
  };

  handleChange = event => {
     this.setState({ [event.target.name]: event.target.value });
   };

  render() {
    const { drinks, dispatch } = this.props;
    return (
      <div>
          <form onSubmit={e => {
            e.preventDefault()
						dispatch(saveDose(this.state.drink));
          }}>
          <Select
            onChange={this.handleChange}
            inputProps={{
              name: 'drink',
              id: 'drink',
            }}
            value={this.state.drink}>
            <MenuItem value={0} disabled>
              Select Drink
            </MenuItem>
            {drinks.map( drink =>
              <MenuItem key={ drink.id } value={ drink.id }>{ drink.name }</MenuItem>
            )}
          </Select>
					<br />
          <Button type="submit" variant="contained" color="primary" >
            Log Drink
          </Button>

        </form>
      </div>
    )
  };
}

export default connect(mapStateToProps)(NewDose)
