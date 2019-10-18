export const Types = {
  KEY_CHANGE: 'orders/KEY_CHANGE',
  KEY_CHANGE_DRINK: 'orders/KEY_CHANGE_DRINK',
  KEY_ADD: 'orders/KEY_ADD',
  KEY_ADD_DRINK: 'orders/KEY_ADD_DRINK',
  SIZE_ADD: 'orders/SIZE_ADD',
  SIZE_ADD_DRINK: 'orders/SIZE_ADD_DRINK',
  SIZE_VALUE: 'orders/SIZE_VALUE',
  RESET_VALUES: 'orders/RESET_VALUES',
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
    case Types.KEY_CHANGE_DRINK:
      return {
        ...state,
        drinks: action.payload.drinks,
      };
    case Types.KEY_ADD:
      return {
        ...state,
        pizzas: [...state.pizzas, action.payload.pizzas],
      };
    case Types.KEY_ADD_DRINK:
      return {
        ...state,
        drinks: [...state.drinks, ...action.payload.drinks],
      };
    case Types.SIZE_ADD:
      return {
        ...state,
        sizes: { ...state.sizes, pizzas: action.payload },
      };
    case Types.SIZE_ADD_DRINK:
      return {
        ...state,
        sizes: { ...state.sizes, drinks: action.payload },
      };
    case Types.RESET_VALUES:
      return {
        pizzas: [], drinks: [], sizes: { pizzas: '', drinks: '' },
      };
    default:
      return state;
  }
}
