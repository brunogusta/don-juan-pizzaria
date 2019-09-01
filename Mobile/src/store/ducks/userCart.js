export const Types = {
  CART_ITENS: 'userCart/CART_ITENS',
};


const INITIAL_VALUES = {
  itens: {
    pizzas: [],
    drinks: [],
  },
  sizes: {
    pizzas: '',
    drinks: '',
  },
};

export default function userCart(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.CART_ITENS:
      return {
        ...state,
        itens: {
          pizzas: action.payload.keys,
        },
        sizes: {
          pizzas: action.payload.size,
        },
      };
    default:
      return state;
  }
}
