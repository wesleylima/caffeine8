import React from 'react';
import { connect } from 'react-redux';
import { newDose, saveDose } from '../actions';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


const mapStateToProps = (state) => {
	return {
		drinks: state.drinks,
		loading: state.loading
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
            dispatch(newDose(this.state.drink));
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
          <FormHelperText>Drink</FormHelperText>
          <Button type="submit">
            Add Dose
          </Button>
        </form>
      </div>
    )
  };
}

export default connect(mapStateToProps)(NewDose)
