const drinks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DRINK':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'REMOVE_DRINK':
      return state.map(drink =>
        (drink.id === action.id)
          ? {...drink }
          : drink
      )
    case 'GET_DRINKS':
      return state;
    case 'GET_DRINK_DATA_RECEIVED':
      return action.data;
    default:
      return state;
  }
}

export default drinks
