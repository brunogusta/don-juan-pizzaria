export const Types = {
  SIZE_VALUE: 'totalValue/SIZE_VALUE',
  TYPE_VALUE: 'totalValue/TYPE_VALUE',
  PIZZA_SIZE: 'totalValue/PIZZA_SIZE',
  DRINK_SIZE: 'totalValue/DRINK_SIZE',
  CHANGE_VALUE: 'totalValue/CHANGE_VALUE',
  RESET_VALUES: 'totalValues/RESET_VALUES',
};


const INITIAL_VALUES = {
  values: ['0,00'],
};

export default function totalValues(state = INITIAL_VALUES, action) {
  switch (action.type) {
    case Types.SIZE_VALUE:
      return { ...state, values: [...action.payload] };
    case Types.TYPE_VALUE:
      return { ...state, values: [...state.values, action.payload] };
    case Types.CHANGE_VALUE:
      return { ...state, values: [...action.payload] };
    case Types.RESET_VALUES:
      return { values: ['0,00'], lastSize: [''] };
    default:
      return state;
  }
}
