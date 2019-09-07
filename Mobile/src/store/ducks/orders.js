export const Types = {
  KEY_CHANGE: 'orders/KEY_CHANGE',
  KEY_ADD: 'orders/KEY_ADD',
  SIZE_ADD: 'orders/SIZE_ADD',
  SIZE_VALUE: 'orders/SIZE_VALUE',
};


const INITIAL_VALUES = {
  pizzas: [],
  drinks: [],
  sizes: {
    pizzas: '',
    drinks: '',
  },
};

export default function orders(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.KEY_CHANGE:
      return {
        ...state,
        pizzas: action.payload.pizzas,
      };
    case Types.KEY_ADD:
      return {
        ...state,
        pizzas: [...state.pizzas, action.payload.pizzas],
      };
    case Types.SIZE_ADD:
      return {
        ...state,
        sizes: { pizzas: action.payload.size },
      };
    default:
      return state;
  }
}
