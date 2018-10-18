import { createSelector } from 'reselect';

const getDrinks = state => state.drinks;
const getDoses = state => state.doses;
const getTotals = state => state.totals;

const getDrink = (dose, drinks) => {
  return drinks && ('find' in drinks) && dose.drinkId ? drinks.find(v => v.id === dose.drinkId) : null
};

const drinksBeforeQota = (drink, caffeineToday) => {
		const remainingInQuota = 500000 - caffeineToday;
    const drinksLeft = Math.trunc(remainingInQuota/drink.caffeineContent.magnitude);
    if (drinksLeft > 0) {
      return drinksLeft;
    } else {
      return 0 ;
    }
}

export const getHydratedDoses = createSelector(
  [getDrinks, getDoses, getTotals],
  (drinks, doses, totalsState) => {
    const hydrated = doses.map((dose) => {
        const drink = getDrink(dose, drinks);
        if (drink) {
          if (dose) {
            return {
              ...dose,
              drink: drink
            }
          }
        }
        return undefined;
    });
    return hydrated.filter((dose) => dose );
  }
)

export const getCaffeineToday = createSelector(
  [getHydratedDoses],
  (doses) => {
    if (doses && doses.length) {
      const total = doses.reduce((cumulus, dose) => dose.percentageConsumed/100 * dose.drink.caffeineContent.magnitude + cumulus, 0);
      return total;
    } else {
      return 0;
    }
  }
)

export const getHydratedDrinks = createSelector(
  [getDrinks, getCaffeineToday],
  (drinks, caffeineToday)  => {
    const hydrated = drinks.map((drink) => {
        if (drink) {
          const drinksLeft = drinksBeforeQota(drink, caffeineToday);
          return {
            ...drink,
            drinksBeforeQota: drinksLeft,
          }
        }
        return false;
    });
    return hydrated.filter((drink) => drink );
  }
)
