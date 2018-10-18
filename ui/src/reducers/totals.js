const totals = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_QUOTA':
      return state.quota = action.quota;
    default:
      return state;
  }
}

export default totals
