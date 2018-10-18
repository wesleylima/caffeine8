import axios from 'axios';

const apiConfig = {
  // baseURL: process.env.API_URL,
  // baseURL: 'http://localhost:8988/',
  baseURL: 'http://localhost:8988/',
};

const apiClient = axios.create(apiConfig);

const dataService = store => next => action => {
  // Pass all actions through this service
  next(action)
  switch (action.type) {
    case 'GET_DRINK_DATA':
      apiClient.get('/drinks').then((res, err) => {
        if (err) {
          return next({
            type: 'GET_DRINK_DATA_ERROR',
            err
          })
        }
        const data = res.data;
        next({
          type: 'GET_DRINK_DATA_RECEIVED',
          data
        })
      }).catch((err) => {
        return next({
          type: 'GET_DOSE_DATA_ERROR',
          err
        })
      });
      break;
    case 'GET_DOSE_DATA':
      apiClient.get('/').then((res, err) => {
        if (err) {
          return next({
            type: 'GET_DOSE_DATA_ERROR',
            err
          })
        }
        const data = res.data;
        next({
          type: 'GET_DOSE_DATA_RECEIVED',
          data
        })
      }).catch((err) => {
        return next({
          type: 'GET_DOSE_DATA_ERROR',
          err
        })
      });
      break;
    case 'POST_DOSE_DATA':
      const dose = {
        drinkId: action.drinkId,
        percentage: action.percentage,
      };
      apiClient.post('/doses', dose).then((res) => {
        const data = res.data;
        next({
          type: 'NEW_DOSE',
          id: data.id,
          ...dose,
        });
        console.log('success');
      }).catch((e) => {
        console.log(e);
      })
      break;
    case 'DELETE_DOSE_DATA':
      apiClient.delete(`/doses/${action.doseId}`).then((a) => {
        console.log('success');
        // TODO: Assign server id to object in state
      }).catch((e) => {
        console.log(e);
      })
      break;
      // Not waiting for post to finish to put data in state
      // return something?
    // Don't handle if the action doesn't require and API call
    default:
      break;
  }
}

export default dataService;
