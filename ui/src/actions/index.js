export const newDose = (drinkId) => ({
  type: 'NEW_DOSE',
  drinkId,
})

export const saveDose = (drinkId) => ({
  type: 'POST_DOSE_DATA',
  drinkId,
})

export const deleteDose = (doseId) => ({
  type: 'DELETE_DOSE_DATA',
  doseId,
});

export const removeDose = (doseId) => ({
  type: 'REMOVE_DOSE',
  doseId,
});

export const updateQuota = (doseId) => ({
  type: 'UPDATE_QUOTA',
  doseId,
});
