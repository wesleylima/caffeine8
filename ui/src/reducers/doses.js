const doses = (state = [], action) => {
  switch (action.type) {
    case 'NEW_DOSE':
      return [
        ...state,
        {
          id: action.id || 0,
          drinkId: action.drinkId,
          percentageConsumed: action.percentageConsumed || 100,
          createdAt: action.createdAt || Date(),
        }
      ];
    case 'REMOVE_DOSE':
      return state.filter(comment => comment.id !== action.doseId);
    case 'UPDATE_DOSE':
      // state.find()
      break;
    case 'GET_DOSE_DATA_RECEIVED':
      let newState = [];
      action.data.forEach((dose) => {
        newState = doses(newState, {
          type: 'NEW_DOSE',
          ...dose
        });
      });
      return newState;
    default:
      return state;
  }
};

export default doses;
